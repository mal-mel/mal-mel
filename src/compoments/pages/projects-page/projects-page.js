import { Component } from 'react';

import ProjectsList from '../../projects-list';

import { WithApiService } from "../../hoc";

import './projects-page.css';


class ProjectsPage extends Component {
    render() {
        const { apiService } = this.props;
        return (
            <div className="container">
                <ProjectsList projects={ apiService.getProjects() }/>
            </div>
        );
    }
}


export default WithApiService(ProjectsPage);
