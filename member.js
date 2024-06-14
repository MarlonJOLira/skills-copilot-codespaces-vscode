function skillsMember() {
    // Get the member id from the URL
    var memberId = getParameterByName('id');
    // Get the member data
    $.getJSON('http://localhost:3000/members/' + memberId, function(member) {
        // Get the skills data
        $.getJSON('http://localhost:3000/skills', function(skills) {
            // Get the member skills data
            $.getJSON('http://localhost:3000/memberSkills', function(memberSkills) {
                // Get the member skills
                var memberSkillsData = memberSkills.filter(function(memberSkill) {
                    return memberSkill.memberId === memberId;
                });
                // Get the skills
                var skillsData = skills.filter(function(skill) {
                    return memberSkillsData.some(function(memberSkill) {
                        return memberSkill.skillId === skill.id;
                    });
                });
                // Render the skills
                renderSkills(skillsData);
            });
        });
    });
}