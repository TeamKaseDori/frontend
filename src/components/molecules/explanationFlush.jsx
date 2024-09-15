import Accordion from 'react-bootstrap/Accordion';

export const ExplanationFlush = () => {
  return (
    <Accordion>
      <p><b>Q&A</b></p>
      <Accordion.Item eventKey="0">
        <Accordion.Header>シンプルマッチングとはなんですか？</Accordion.Header>
        <Accordion.Body>
          シンプルマッチングは、位置情報や移動方向によってランダムにマッチングさせる機能のことです。
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>趣味マッチングとはなんですか？</Accordion.Header>
        <Accordion.Body>
          趣味マッチングは、位置情報や移動方向、登録した趣味によってランダムにマッチングさせる機能のことです。
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>マッチングが終わりません</Accordion.Header>
        <Accordion.Body>
          GPSで位置情報を取得しているため、時間がかかる場合があります。
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>ユーザー情報を確認したい</Accordion.Header>
        <Accordion.Body>
          ユーザー情報はヘッダーのタブの<b>ユーザー</b>をクリックしていただくとご確認いただけます。
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}


export const ExplanationMatchingFlush = () => {
  return (
    <Accordion  defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>途中でキャンセルしたい</Accordion.Header>
        <Accordion.Body>
          上記のマッチングをキャンセルすると書かれたボタンを押すとキャンセルできます。
          ただし、正当な理由なくキャンセルした場合はしばらくの間マッチングを行うことができなくなります。
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>相手に会える気がしません</Accordion.Header>
        <Accordion.Body>
          Hintボタンから相手の座標、距離、方向を確認することができます。
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

