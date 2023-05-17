import {Injectable} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";
import {map} from "rxjs";

@Injectable()
export class TranslateService {
    constructor(private http: HttpService){
    }
    translate(text) {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", text);
        const transleted = this.http.post(`https://google-translate1.p.rapidapi.com/language/translate/v2/detect`,encodedParams,
            {
            headers:{
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '4cc0582f42mshf5d3a748abb79b3p1c33f1jsn2e03f7e2d9f4',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
        params: {'api-version': '3.0'}}).pipe(
            map(response => response.data)
        );
        return transleted
    }
}