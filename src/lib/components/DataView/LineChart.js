import Chart from "react-apexcharts";

const LineChart = (props) => {
  const {
    categories, // [string, ...]
    series, // [{name:string, data: array[number, ...]}]
    height,
    forceYStartTo0
  } = props;

  const options = {
    chart: {
      id: "basic-line"
    },
    xaxis: {
      categories
    },
    yaxis: {
      min: forceYStartTo0 ? 0 : undefined
    }
  }

  return (
    <div>
      <Chart
          options={options}
          series={series ?? []}
          type="line"
          height={height}
      />
    </div>
  )
}

LineChart.defaultProps = {
  height: 300,
  forceYStartTo0: true
}

export default LineChart;