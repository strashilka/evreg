import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, Title
} from "chart.js";
import {Line} from "react-chartjs-2";
import {EventUser} from "../../date/EventUser";
import ProcessDates from "./ProccesDates";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Users registration representation',
    },
  },
};

function LineChart({participants}: { participants: EventUser[] }) {
  let data_set = ProcessDates(participants)

  const data = {
    labels: data_set.map((item) => item.date),
    datasets: [{
      label: '# of Participants',
      data: data_set.map((item) => item.count),
      borderWidth: 1,
      borderColor: 'rgba(49,87,15,0.5)',
      backgroundColor: 'rgb(170,239,131)',
    }]
  };

  return <Line options={options} data={data} width={"400%"} height={"200%"}/>;
}

export default LineChart