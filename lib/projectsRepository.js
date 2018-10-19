const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Project = require('../models/project');

class ProjectsRepository {

    // get all the projects
    getProjects(callback) {
        console.log('*** ProjectsRepository.getProjects');
        Project.count((err, projectsCount) => {
            let count = projectsCount;
            console.log(`Projects count: ${count}`);

            Project.find({}, (err, projects) => {
                if (err) {
                    console.log(`*** ProjectsRepository.getProjects error: ${err}`);
                    return callback(err);
                }
                callback(null, {
                    count: count,
                    projects: projects
                });
            });

        });
    }

    getPagedProjects(skip, top, callback) {
        console.log('*** ProjectsRepository.getPagedProjects');
        Project.count((err, projectsCount) => {
            let count = projectsCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`Projects count: ${count}`);

            Project.find({})
                .sort({ projectName: 1 })
                .skip(skip)
                .limit(top)
                .exec((err, projects) => {
                    if (err) {
                        console.log(`*** ProjectsRepository.getPagedProjects error: ${err}`);
                        return callback(err);
                    }
                    callback(null, {
                        count: count,
                        projects: projects
                    });
                });

        });
    }



}

module.exports = new ProjectsRepository();