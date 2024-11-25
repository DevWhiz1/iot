// import { ResponsiveLine } from "@nivo/line";
// import { useTheme } from "@mui/material";
// import { tokens } from "../theme";

// const data = [
//   {
//     id: "Switch 1",  // Line identifier
//     data: [
//       { x: "2024-09-22", y: 0 },  // First data point
//       { x: "2024-09-22", y: 1 },  // Second data point
//       { x: "2024-09-22", y: 0 }   // Third data point
//     ]
//   }
// ];

// const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <ResponsiveLine
//       data={data}  
//       theme={{
//         axis: {
//           domain: {
//             line: {
//               stroke: colors.grey[100],
//             },
//           },
//           legend: {
//             text: {
//               fill: colors.grey[100],
//             },
//           },
//           ticks: {
//             line: {
//               stroke: colors.grey[100],
//               strokeWidth: 1,
//             },
//             text: {
//               fill: colors.grey[100],
//             },
//           },
//         },
//         legends: {
//           text: {
//             fill: colors.grey[100],
//           },
//         },
//         tooltip: {
//           container: {
//             color: colors.primary[500],
//           },
//         },
//       }}
//       colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
//       margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
//       xScale={{ type: "time", format: "%Y-%m-%dT%H:%M:%S.%LZ", precision: "second" }} // Adjust format for full timestamps
//       xFormat="time:%Y-%m-%dT%H:%M:%S.%LZ"
//       yScale={{
//         type: "linear",
//         min: 0,
//         max: 1,   // Since values are either 0 (false) or 1 (true)
//         stacked: false,
//         reverse: false,
//       }}
//       axisBottom={{
//         format: "%H:%M:%S",  // Display time in hours, minutes, and seconds
//         tickValues: "every 1 second", // Adjust tick values as needed
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "Time",
//         legendOffset: 36,
//         legendPosition: "middle",
//       }}
//       axisLeft={{
//         orient: "left",
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: "State (On/Off)",
//         legendOffset: -60,
//         legendPosition: "middle",
//       }}
//       enableGridX={false}
//       enableGridY={true}
//       curve="linear"
//       pointSize={10}
//       pointBorderWidth={1}
//       pointBorderColor={{ from: "serieColor" }}
//       useMesh={true}
//       legends={[
//         {
//           anchor: "top-right",
//           direction: "column",
//           justify: false,
//           translateX: 100,
//           translateY: 0,
//           itemsSpacing: 0,
//           itemDirection: "left-to-right",
//           itemWidth: 80,
//           itemHeight: 20,
//           itemOpacity: 0.75,
//           symbolSize: 12,
//           symbolShape: "circle",
//           symbolBorderColor: "rgba(0, 0, 0, .5)",
//           effects: [
//             {
//               on: "hover",
//               style: {
//                 itemBackground: "rgba(0, 0, 0, .03)",
//                 itemOpacity: 1,
//               },
//             },
//           ],
//         },
//       ]}
//     />
//   );
// };

// export default LineChart;



















import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData"; // Ensure your data format matches the expected structure
// const data={
//   "_id": "66d57b92e43cd4781b66f9ed",
//   "device": "66d57b61e43cd4781b66f9e9",
//   "entityName": "Switch 1",
//   "entityId": "switch_1",
//   "domain": "switch",
//   "state": false,
//   "IsActive": true,
//   "createdAt": "2024-09-02T08:47:14.384+00:00",
//   "updatedAt": "2024-09-22T16:42:39.334+00:00",
//   "__v": 0,
//   "history": [
//     {
//       "dateTime": "2024-09-22T16:42:34.835+00:00",
//       "value": false,
//       "_id": "66f048fae4ffe1fa93c9c8ee"
//     },
//     {
//       "dateTime": "2024-09-22T16:42:37.493+00:00",
//       "value": true,
//       "_id": "66f048fde4ffe1fa93c9c8f1"
//     },
//     {
//       "dateTime": "2024-09-22T16:42:39.334+00:00",
//       "value": false,
//       "_id": "66f048ffe4ffe1fa93c9c8f5"
//     }
//   ]
// }

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
      xScale={{ type: "time", format: "%Y-%m-%d", precision: "day" }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: "linear",
        min: "0",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      axisBottom={{
        format: "%b %d",
        tickValues: "every 1 days",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Date",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "L/hr",
        legendOffset: -60,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={true}
      curve="linear"
      pointSize={0}
      pointBorderWidth={1}
      pointBorderColor={{ from: "serieColor" }}
      useMesh={true}
      legends={[
        {
          anchor: "top-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
