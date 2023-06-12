import { Link } from "react-router-dom";
import React from 'react';
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import { info } from "autoprefixer";

export default function () {
  const event = () => [{
    title:'筋トレ',
    date:'2023-06-11'

  }]

  return (
    <>
      <div className="font-bold text-slate-600">統計</div>
      <div>統計だだ！</div>
      <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin]} //時間軸なし
          duration= {{days: 31}}
          headerToolbar={{
            right: 'dayGridMonth,dayGridWeek',//右上の選択　月，週
            left: 'prev,next today',
            center: 'title'
          }}
          locale= "ja"
          // dayCellContent={function (e) {
          //   e.dayNumberText = e.dayNumberText.replace('日');
          // }}
          contentHeight={'auto'}
          initialView="dayGridMonth" // 初期表示のモードを設定する
          dayMaxEvents='ture'
          events= { event
          //[
          //   {title: 'ジム', date:'2023-06-09'},
          //   {title: 'ジム', date:'2023-06-13'}
          // ]
          }
        />
      </div>
    </div>
      <Link to="/allTrainings">トレーニング</Link>
    </>
    
  );
}
