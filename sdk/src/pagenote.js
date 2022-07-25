import PagenoteCore from './pagenote-core'
import { h, render } from 'preact';
import AsideBar from "./component/aside/AsideBar";
import ActionBars from "./action/ActionBars";
import {debounce, getPagenoteRoot} from './utils';
import './component/light/annotation.scss'
import toggleLightMenu from './light-menu'

function PageNote(id,options={}){
    const pagenoteCore = new PagenoteCore(id,options);
    const rootElement = getPagenoteRoot();

    const colors = options.brushes.filter(function (item) {
        return item && item.bg;
    }).map((brush)=>{return brush.bg})
    toggleLightMenu(false,null,null,colors);

    // side-bar
    const sidebar = document.createElement('pagenote-bar');
    sidebar.dataset.pagenote='sidebar';
    rootElement.appendChild(sidebar);
    render(<AsideBar pagenote={pagenoteCore} /> , sidebar);

    // action-bar
    let actionBar = null;
    pagenoteCore.addListener(debounce(function (status,before) {
        if(status===before && status!==pagenoteCore.CONSTANT.WAITING){
            return;
        }
        const showButton = (pagenoteCore.target && (status === pagenoteCore.CONSTANT.WAITING || status === pagenoteCore.CONSTANT.PLAYANDWAIT));
        if(showButton) {
            actionBar = actionBar || document.createElement('pagenote-action');
            actionBar.dataset.pagenote = 'action';
            render(<ActionBars pagenote={pagenoteCore} />, actionBar);
            rootElement.appendChild(actionBar);
        } else {
            actionBar && actionBar.remove();
        }
    },16));

    // lights
    let stepBar = document.querySelector('pagenote-annotations');
    if(!stepBar){
        stepBar = document.createElement('pagenote-annotations')
        rootElement.appendChild(stepBar);
    }

    return pagenoteCore;
}

window.PageNote = PageNote;
export default PageNote;

