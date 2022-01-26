import { configureStore} from "@reduxjs/toolkit";
import count from "./reducers/count";
import arrayInfo from "./reducers/arrayInfo";
import running from "./reducers/running";

export default configureStore({
    reducer:{
        counter: count,
        arrayInfo: arrayInfo,
        running: running,
    }
});