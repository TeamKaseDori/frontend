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
        <Accordion.Header>異性マッチングとはなんですか？</Accordion.Header>
        <Accordion.Body>
          異性マッチングは、位置情報や移動方向、性別によってランダムにマッチングさせる機能のことです。
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

