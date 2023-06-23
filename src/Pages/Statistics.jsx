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
      <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin]} //時間軸なし
          duration= {{days: 31}}
          headerToolbar={{
            right: 'today',//右上の選択
            left: 'prev,next',
            center: 'title'
          }}
          locale= "ja"
          contentHeight={'auto'}
          initialView="dayGridMonth" // 初期表示のモードを設定する
          dayMaxEvents='ture'
          events= {event()}
        />
      </div>
    </div>
      <Link to="/allTrainings">トレーニング</Link>
    </>
    
  );
}
