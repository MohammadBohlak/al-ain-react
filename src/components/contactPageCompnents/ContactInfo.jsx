import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import BoxInfo from "./boxInfo/BoxInfo";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <Row className="g-4">
        <BoxInfo
          data={{
            title: "العنوان",
            // text: "نعمل في جميع أنحاء الإمارات العربية المتحدة, مع وجود فرق ميدانية في أبو ظبي, دبي, والعين.",
            text: "السعودية",
            icon: <FaLocationDot/>,
          }}
        />
        <BoxInfo
          data={{
            title: "الهاتف",
            text: "+966 55 166 3559",
            icon: <FaPhoneAlt/>,
          }}
        />
        <BoxInfo
          data={{
            title: "البريد الإلكتروني",
            text: "info@al3een.net",
            icon: <MdEmail/>,
          }}
        />
      </Row>
    </StyledContactInfo>
  );
};

const StyledContactInfo = styled.div`
  margin-bottom: var(--section-spacing);
`;

export default ContactInfo;
