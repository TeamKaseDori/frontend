import { Link } from "react-router-dom";
import {PageWrapper} from "../organisms/wrapper/pageWrapper";


export const HomePage = () => {
    
    return (
        <PageWrapper>
            ホームページ
            <Link to="/leader">位置情報テスト</Link>
        </PageWrapper>
    );
};