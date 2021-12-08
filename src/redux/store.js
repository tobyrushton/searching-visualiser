import { configureStore} from "@reduxjs/toolkit";
import arrayReducer from "./reducers/array";
import searchNum from "./reducers/searchNum";
import maxValue from "./reducers/maxValue";
import arrayBars from "./reducers/arrayBars";
import sortedStatus from "./reducers/sortedStatus";
import count from "./reducers/count";

export default configureStore({
    reducer:{
        array: arrayReducer,
        searchNumber: searchNum,
        arrayBars: arrayBars,
        maxValue: maxValue,
        sortedStatus: sortedStatus,
        counter: count,
    }
});