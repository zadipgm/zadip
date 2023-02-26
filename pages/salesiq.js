import React from "react";

const Salesiq = (props) => {
  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"${props.widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${props.domain}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`,
      }}
    />
  );
};
export default Salesiq;
