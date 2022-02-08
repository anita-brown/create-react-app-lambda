import React from 'react'
import { useEffect, useState } from 'react'
import './Contributors.css'
import man from '../asset/img/man.jpeg'
import { Link } from 'react-router-dom'
import { useCallback } from 'react'
import Loaders from 'react-loading-icons'


const Contributors = () => {
    const [angularOrg, setangularOrg] = useState([])
    const [state, setDefault] = useState('Contributions')
    const [loading, setLoading] = useState(true);

    const fetchContributors = useCallback(async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/orgs/Angular`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        setangularOrg([data])
        console.log('hhgggffffddd', angularOrg)
        console.log("hhh", setangularOrg([data]))
        const nextResponse = await fetch(`${process.env.REACT_APP_GITHUB_URL}/orgs/angular/repos?per_page=2`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const newData = await nextResponse.json()


        const contrubutor = newData.map(async (element) => {
            const nextNextResponse = await fetch(element.contributors_url, {
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            })
            return await nextNextResponse.json();
        })

        const allRepoContributors = await Promise.all(contrubutor)
        // console.log('allrepo',allRepoContributors)

        const ranks = {};

        allRepoContributors.forEach(repo => {
            repo.forEach(contributor => {
                if (!ranks[contributor.login]) {
                    ranks[contributor.login] = {
                        login: contributor.login,
                        contribution: contributor.contributions,
                        avatarUrl: contributor.avatar_url,
                        userUrl: contributor.url,
                        followers: contributor.followers_url,
                        gists: contributor.gists_url
                    }
                } else {
                    ranks[contributor.login].contribution = ranks[contributor.login].contribution + contributor.contributions
                }
            })
        })

        console.log(Object.values(ranks)[0].userUrl)
        const allUsersPromises = Object.values(ranks).map(async (user) => {
            const response = await fetch(user.userUrl, {
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            })
            return await response.json()
        });

        const allUsers = await Promise.all(allUsersPromises);

        allUsers.forEach(user => {
            ranks[user.login] = {
                ...ranks[user.login], name: user.name, followers: user.followers, public_repos: user.public_repos, public_gists: user.public_gists,
                repos_url: user.repos_url
            }
        })

        console.log(Object.values(ranks));

        const sortedUsers = Object.values(ranks).sort((a, b) => (a.contribution < b.contribution) ? 1 : ((b.contribution < a.contribution) ? -1 : 0));

        setangularOrg(sortedUsers)

        console.log('iiii', sortedUsers);


        setLoading(false)
    }, [angularOrg]
    )


    useEffect(() => {
        const getContributors = async () => {
            await fetchContributors()
        }

        getContributors()

    }, [])
    const sortByContributions = () => {
        const sortedFollowers = angularOrg.sort((a, b) => (a.contribution < b.contribution) ? 1 : ((b.contribution < a.contribution) ? -1 : 0));

        setangularOrg(sortedFollowers);
    }

    const sortByFollowers = () => {
        const sortedFollowers = angularOrg.sort((a, b) => (a.followers < b.followers) ? 1 : ((b.followers < a.followers) ? -1 : 0));

        setangularOrg(sortedFollowers);
    }

    const sortByPublicRepos = () => {
        const sortedPublicRepos = angularOrg.sort((a, b) => (a.public_repos < b.public_repos) ? 1 : ((b.public_repos < a.public_repos) ? -1 : 0));

        setangularOrg(sortedPublicRepos);
    }

    const sortByPublicGists = () => {
        const sortedPublicGists = angularOrg.sort((a, b) => (a.public_gists < b.public_gists) ? 1 : ((b.public_gists < a.public_gists) ? -1 : 0));

        setangularOrg(sortedPublicGists);
    }





    if (!loading) {



        return (
            <section id="contributors">
                <div className='contribution-header '>
                    <h1 className='header'>Contributors</h1>


                    {/* <div > */}
                        <div className='dropdown-header'>
                            <input className=' search-header' placeholder='search...' type="text" id="" />
                            <button className='btn btn-search'>Search</button>
                            <div />


                            <select className="btn dropbtn filter" selected>
                                <option value='0'>Filter</option>
                                <option onChange={sortByContributions} value="Contributions">Contributions</option>
                                <option onChange={sortByFollowers} value="Followers">Followers</option>
                                <option onChange={sortByPublicRepos} value="Repos">Repos</option>
                                <option onChange={sortByPublicGists} value="Gists">Gists</option>
                            </select>
                        </div>
                    {/* </div> */}
                </div>



                <div className="wrapper">
                    {angularOrg.length > 0 && angularOrg.map((contributors) => (
                        <div className="container" >

                            <Link to="/userprofile"><img className="img-container" src={contributors.avatarUrl} key={contributors.id} alt="img"></img></Link>

                            <div className="paragraph">
                                <h2 className='name' key={contributors.id}>{contributors.name}</h2>
                                <p>
                                    <em key={contributors.id}>{contributors.login}</em>
                                </p>
                                <Link to={`/userprofile/${contributors.login}`}
                                    state={{ contributors }} >
                                    <button className="btn">Profile</button>
                                </Link>
                            </div>
                        </div>

                    ))}
                </div>

            </section>
        )
    } else {
        return <Loaders.Circles className='loader' />
    }
}

export default Contributors;