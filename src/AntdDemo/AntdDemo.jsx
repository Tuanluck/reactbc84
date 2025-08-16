import { Rate } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;
// import dayjs from 'dayjs'
import React from "react";
import TableDemo from "./TableDemo";

const AntdDemo = () => {
  return (
    <div className="container">
      <h3>antd-demo</h3>
      <Rate allowHalf defaultValue={2.5} />
      <RangePicker
        onChange={(dates, dateStrings) => {
          //   let dstart = moment(dateStrings[0]).format("DD/MM/YYYY hh:mm:ss");
          //dayjs
          let dstart = dates[0].format('DD/MM/YYYY hh:mm:ss')
          console.log(dstart);
          // Xử lý khi chọn ngày ở đây
          // console.log('Selected dates:', dates);
          // console.log('Selected date strings:', dateStrings);
        }}
        showTime
      />
      <hr className="bg-amber-500 p-1"/>
      <h3>Demo Table</h3>
      <TableDemo/>
    </div>
  );
};

export default AntdDemo;
