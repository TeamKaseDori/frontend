import { useEffect } from 'react';

export const useGeolocationTracker = (setCoords) => {
  console.log("useGeolocationTracker");

  // 位置情報の取得に成功したときの処理
  const success = (position) => {
    setCoords(position);
  };

  // 位置情報の取得に失敗したときの処理
  const error = (err) => {
    console.error(`ERROR(${err.code}): ${err.message}`);
    if (err.code === 1) {
      alert("このサイトによる位置情報へのアクセスを許可してください");
    } else if (err.code === 2) {
      alert("位置情報を取得できませんでした");
    } else if (err.code === 3) {
      alert("位置情報の取得がタイムアウトしました");
    }
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 30000,
    maximumAge: 0,
  };

  useEffect(() => {
    const id = navigator.geolocation.watchPosition(success, error, options);
    console.log(`監視ID: ${id}`);

    // コンポーネントのアンマウント時に位置情報の追跡を停止
    return () => {
      navigator.geolocation.clearWatch(id);
      console.log(`監視ID ${id} をクリアしました`);
    };
  }, []); 
};