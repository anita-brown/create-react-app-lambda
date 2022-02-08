import "./Repository.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";

const Repository = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { repo } = location.state;
  const [reposContributorUrl, setContributorRepo] = useState([]);

  const fetchContributors = useCallback(async () => {
    const repoResponse = await fetch(repo.contributors_url, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await repoResponse.json();
    console.log("bb", data);
    setContributorRepo(data);

    setLoading(false);
  }, [repo.contributors_url]);

  useEffect(() => {
    const getContributors = async () => {
      await fetchContributors();
    };

    getContributors();
  }, [fetchContributors]);

  return (
    <section>
      <div className="cont-repo">
        <div className="repo-container">
          <p className="repo-name">
            {repo.name}/<span>{repo.name}</span>
          </p>
          <p className="btn-repo name">Public</p>
        </div>

        <div className="img-profile">
          <Link to={`/userprofile/${repo.owner.login}`} state={{ repo }}>
            {" "}
            <img
              className="img-container boxed"
              src={`${repo.owner.avatar_url}`}
              alt=""
            />
          </Link>

          <p>
            <span>{`${repo.owner.login}`}</span> commits
          </p>
        </div>

        <h1 className="contributor-header">Contributors</h1>

        <div className="image">
          {reposContributorUrl.length > 0 &&
            reposContributorUrl.map((repo) => (
              <img
                className="img-container boxed"
                src={repo.avatar_url}
                alt=""
              />
            ))}

          <a
            className="contributor-count"
            href="https://github.com/angular/angular/graphs/contributors"
          >
            <p>+ contributors</p>
          </a>
        </div>

        <div className="language-section">
          <p className="lang">Languages</p>
          <div className="lang-repo word">
            <p className="color-repo yellow"></p>
            <p>Javascript</p>
            <p className="color-repo blue "></p>
            <p>Typescript</p>
            <p className="color-repo purple"></p>
            <p>CSS</p>
            <p className="color-repo red"></p>
            <p>HTML</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repository;
