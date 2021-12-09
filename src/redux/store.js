import { configureStore} from "@reduxjs/toolkit";
import count from "./reducers/count";
import arrayInfo from "./reducers/arrayInfo";

export default configureStore({
    reducer:{
        counter: count,
        arrayInfo: arrayInfo
    }
});