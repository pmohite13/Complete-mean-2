
const _volunteerVm = {
    state: null,
    qualification: null,
    city: null,
    workAreas: null
}


// module.exports.volunteerVm = volunteerVm;

module.exports = {
    volunteerVm = function () {
        return _volunteerVm;
    }
}

