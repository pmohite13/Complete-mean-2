const projectsRepo = require('../../../lib/projectsRepository'),
    statesRepo = require('../../../lib/statesRepository'),
    util = require('util');

class ProjectsController {

    constructor(router) {
        router.get('/', this.getProjects.bind(this));
        router.get('/page/:skip/:top', this.getProjectsPage.bind(this));
    }

    getProjects(req, res) {
        console.log('*** getProjects');
        projectsRepo.getProjects((err, data) => {
            if (err) {
                console.log('*** getProjects error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getProjects ok');
                res.json(data.projects);
            }
        });
    }

    getProjectsPage(req, res) {
        console.log('*** getProjectsPage');
        const topVal = req.params.top,
            skipVal = req.params.skip,
            top = (isNaN(topVal)) ? 10 : +topVal,
            skip = (isNaN(skipVal)) ? 0 : +skipVal;

        projectsRepo.getPagedProjects(skip, top, (err, data) => {
            res.setHeader('X-InlineCount', data.count);
            if (err) {
                console.log('*** getProjectsPage error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getProjectsPage ok');
                res.json(data.projects);
            }
        });
    }











}

module.exports = ProjectsController;