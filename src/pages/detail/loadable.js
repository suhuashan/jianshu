import Loadable from 'react-loadable';
import React from "react";
import { Loading } from "./style";

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
        return <Loading>正在加载...</Loading>
    }
});
 
export default () => {
    return <LoadableComponent/>;
}