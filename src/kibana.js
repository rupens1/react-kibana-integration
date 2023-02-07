import React, { useEffect } from "react";
import { KibanaClient } from "@elastic/kibana-client";


function Kibana() {
  const kibana = new KibanaClient({
    node: "https://localhost:5601",
    auth: {
      username: "rupens1",
      password: "Developer_1",
    },
  });


  useEffect(() => {
    kibana
  .asScoped(({ savedObjects }) =>
    savedObjects.create("index-pattern", {
      attributes: {
        title: "your-index-pattern-title",
      },
    })
  )
  .then((resp) => console.log("Index pattern created with ID:", resp.id))
  .catch((err) => console.error(err));

    // const log = {
    //   timestamps: new Date(),
    //   level: "info",
    //   message: "This is a log message",
    // };
    // client
    //   .index({
    //     index: "kibana-logs",
    //     body: log,
    //   })
    //   .then((response) => {
    //     console.log(response.body.result);
    //   });
  }, []);
  return <div className="App">Learn React</div>;
}

export default Kibana;
