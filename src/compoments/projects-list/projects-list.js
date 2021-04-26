import {ArticleItemAdvanced} from "../article-item";

import './projects-list.css';


const ProjectsList = ({ projects }) => {
    let projectsList = [];
    for (let i = 0; i < projects.length; i += 2) {
        projectsList.push(
            <div className="row projects-row" key={ `_row_${i}` }>
                <div className="col-md-6" key={ `_col_1_${i}` }>
                    <ArticleItemAdvanced { ...projects[i] } key={ projects[i].id } />
                </div>
                <div className="col-md-6" key={ `_col_2_${i}` }>
                    <ArticleItemAdvanced { ...projects[i + 1] } key={ projects[i].id } />
                </div>
            </div>
        );
    }
    return (
        <div className="projects-list">
            { projectsList }
        </div>
    );
}


export default ProjectsList;
