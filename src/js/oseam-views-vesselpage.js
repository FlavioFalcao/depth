// -------------------------------------------------------------------------------------------------
// OpenSeaMap Water Depth - Web frontend for depth data handling.
//
// Written in 2012 by Dominik Fässler dfa@bezono.org
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.
//
// You should have received a copy of the CC0 Public Domain Dedication along
// with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
// -------------------------------------------------------------------------------------------------

OSeaM.views.vesselpage = OSeaM.View.extend({
    modalDialog:null,
    render: function() {
        var template = OSeaM.loadTemplate('vesselgeneric');
        this.renderParams =  {
        		loa   : this.model.get('loa'),
        		breadth   : this.model.get('breadth'),
        		draft   : this.model.get('draft'),
        		displacement   : this.model.get('displacement'),
        		height   : this.model.get('height'),
        		manufacturer   : this.model.get('manufacturer'),
        		model   : this.model.get('model')
        };
        var content = $(template(this.renderParams));
        OSeaM.frontend.translate(content);
        this.$el.html(content);
        return this;
    },
    validate: function() {
    	return true;
    }
});