import { configureStore} from "@reduxjs/toolkit";
import count from "./reducers/count";
import arrayInfo from "./reducers/arrayInfo";
import headerInfo from "./reducers/headerInfo";

export default configureStore({
    reducer:{
        counter: count,
        arrayInfo: arrayInfo,
        headerInfo: headerInfo
    }
});