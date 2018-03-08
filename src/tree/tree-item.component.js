import {Component, Decorators} from '@dean_neal/core';

import Tpl from './tree-item.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-tree-item-debug',
    template: Tpl,
    hostEvents: {
        click: 'toggle'
    },
    // hostClasses: {
    //     'hidden': 'visible'
    // },
    // visibility: 'visible',
    props: ()=> {
        return {        
            visible: false
            // components: []
        }
    }
})
export class AceTreeItemComponent {
    onInit() {

    }
    
    toggle(e){
        e.stopPropagation();

        this.props.set('visible', !this.props.get('visible'));
    }
}