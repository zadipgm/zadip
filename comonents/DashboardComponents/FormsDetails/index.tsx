import * as React from "react";
import { useTheme } from "styled-components";
import Charts from "../pieChart";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableRow,
  Title,
} from "./styled.components";
const FormsDetails = () => {
  const { translations } = useTheme();
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  let showdata = 10;
  const [show, setShow] = React.useState(showdata);

  React.useEffect(() => {
    setLoading(true);
    let APP_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://api.zadip.sa";
    fetch(`${APP_URL}/get_zadipform`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  // const renderTableData = () => {
  //   return (
  //     data &&
  //     data?.slice(0, show)?.map((item, index) => {
  //       const { Name, MobileNumber, Email, ServiceName, Page } = item; //destructuring
  //       return (
  //         <TableRow key={index}>
  //           <TableData>{Name}</TableData>
  //           <TableData>{MobileNumber}</TableData>
  //           <TableData>{Email}</TableData>
  //           <TableData>{ServiceName}</TableData>
  //           <TableData>{Page}</TableData>
  //         </TableRow>
  //       );
  //     })
  //   );
  // };
  // const renderTableHeader = () => {
  //   return (
  //     <>
  //       <TableHead>NAME</TableHead>
  //       <TableHead>PHONE</TableHead>
  //       <TableHead>EMAIL</TableHead>
  //       <TableHead>SERVICE</TableHead>
  //       <TableHead>Page</TableHead>
  //     </>
  //   );
  // };

  const serviceCounts = {} as any;
  data.forEach((service) => {
    serviceCounts[service.ServiceName] =
      (serviceCounts[service.ServiceName] || 0) + 1;
  });

  const pageCounts = {} as any;
  data.forEach((service) => {
    pageCounts[service.Page] = (pageCounts[service.Page] || 0) + 1;
  });

  // const ShowMore = () => {
  //   setShow(show + 10);
  // };

  return (
    <Container>
      <Title>{translations.welcomeNote}</Title>
      <Charts
        title={translations.userRequestedServices}
        serviceCounts={serviceCounts}
        pageCounts={pageCounts}
      />

      {/* <Title>{translations?.serviceDetails}</Title>
      <Table id="Services" className="Services">
        <TableBody>
          <TableRow>{renderTableHeader()}</TableRow>
          {renderTableData()}
        </TableBody>
      </Table>
      {data.length <= show ? "" : <Button onClick={ShowMore}>Show More</Button>} */}
    </Container>
  );
};
export default FormsDetails;
