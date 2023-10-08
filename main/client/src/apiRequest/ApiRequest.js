import axios from "axios";

let BASEURL="http://localhost:5020"

export  async function BrandListRequest() {
    try {
        let result=await axios.get(BASEURL+'/api/v1/BrandList');
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}


export  async function CategoryListRequest() {
    try {
        let result=await axios.get(BASEURL+'/api/v1/CategoryList');
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}



export  async function ProductListByRemarkRequest(Remark) {
    try {
        let result=await axios.get(BASEURL+'/api/v1/ListByRemark/'+Remark);
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}


export  async function SliderListRequest() {
    try {
        let result=await axios.get(BASEURL+'/api/v1/SliderList');
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}


export  async function DetailsListRequest(id) {
    try {
        let result=await axios.get(BASEURL+'/api/v1/ListDetails/'+id);
        let data=result.data['data'];
        return data;
    }
    catch (e) {
        return [];
    }
}
