import { useEffect, useState } from "react";
import { useGeolocationTracker } from "../../hooks/location/useGeolocationTracker";
import { useGeoPythagoreanDistance } from "../../hooks/calculation/useCalculation";
import {DistanceOnlyCircle} from "../organisms/leader/circle/distanceOnlyCircle";
import {PageWrapper} from "../organisms/wrapper/pageWrapper";
import Spinner from 'react-bootstrap/Spinner';


//位置情報取得テスト用
export const LeaderPage = () => {
    console.log("LeaderPage");

    const [isChange, setIsChange] = useState(true);

    const [inputLatitude, setInputLatitude] = useState(0);
    const [inputLongitude, setInputLongitude] = useState(0);

    const [Latitude, setLatitude] = useState(37.912);
    const [Longitude, setLongitude] = useState(139.0618);
    
    const [distance, setDistance] = useState(99999);
    const [preDistance, setPreDistance] = useState(0);

    const [selfCoords, setSelfCoords] = useState(undefined);

    useGeolocationTracker(setSelfCoords);

    const calculatedDistance = useGeoPythagoreanDistance(
        selfCoords?.coords.latitude ?? 0,
        selfCoords?.coords.longitude ?? 0,
        Latitude,
        Longitude
    );

    useEffect(() => {
        if(selfCoords){
            console.log("距離を計算しました");
            const newDistance = calculatedDistance;
            setPreDistance(distance);
            setDistance(newDistance);
        }
        console.log("位置情報を取得しました");
    }, [selfCoords, Latitude, Longitude, calculatedDistance]); 

    const handleChangeLatitude = (event) => {
        const newText = parseFloat(event.target.value);
        setInputLatitude(newText);
    };

    const handleChangeLongitude = (event) => {
        const newText = parseFloat(event.target.value);
        setInputLongitude(newText);
    };

    const onClickChangeGeo = () => {
        if(
            inputLatitude >= -90  && inputLatitude <= 90 &&
            inputLongitude >= -180 && inputLongitude <= 180
        ){
            setLatitude(inputLatitude);
            setLongitude(inputLongitude);
            setDistance(calculatedDistance);
        } else {
            alert("正しく入力してください");
        }
    };

    const onClickChangePage = () => {
        setIsChange(!isChange);
    };

    
    return (
        <>

                <p onClick={onClickChangePage}>
                    {isChange ? (<>円を表示する</>) : (<>詳細を表示する</>)}
                </p>

            {isChange ? (
                <PageWrapper isHeader={false}>
                    <h2>現在地</h2>
                    {selfCoords ? (
                        <>
                            <p>緯度: {selfCoords.coords.latitude}</p>
                            <p>経度: {selfCoords.coords.longitude}</p>
                            <p>移動方向: {selfCoords.coords.heading ?? '移動してください'}</p>
                        </>
                    ) : (
                        <>
                            <Spinner animation="border" />;
                        </>
                    )}

                    <hr />
                    <h2>指定した位置</h2>
                    <p>緯度: {Latitude}</p>
                    <p>経度: {Longitude}</p>

                        注意：ページを再読み込みすると初期化されます


                    <hr />
                    <h2>距離</h2>
                    {selfCoords ? (
                        <h3>距離: {distance}m</h3>
                    ) : (
                        <Spinner animation="border" />
                    )}
                    {preDistance ? (
                        <p>一つ前の計測：{preDistance}m</p>
                    ) : null}

                    <hr />
                    <h2>位置指定</h2>
                    <label>緯度: </label>
                    <input
                        type="number"
                        value={inputLatitude}
                        onChange={handleChangeLatitude}
                    />
                    <br />
                    <label>経度: </label>
                    <input
                        type="number"
                        value={inputLongitude}
                        onChange={handleChangeLongitude}
                    />
                    <br />
                    <br />
                    <button onClick={onClickChangeGeo}>
                        指定する
                    </button>

                    <br />
                </PageWrapper>
                ) : (
                <>
                    {selfCoords ? (
                    <DistanceOnlyCircle distance={distance} preDistance={preDistance}/>
                    ) : (
                        <Spinner animation="border" />
                    )}
                </>
            )}
            

        </>
    );
};