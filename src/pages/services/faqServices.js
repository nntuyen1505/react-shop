import { api, handleResponse } from "./config";

const FaqServices = {
    faq() {
        return fetch(`${api}/faq`).then(handleResponse)
    }
}
export default FaqServices