function templateSuccess(orderId, products, price, total, direction) {
    let text = `
    <!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
            /* CLIENT-SPECIFIC STYLES */
            body,
            table,
            td,
            a {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
            table,
            td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }
            img {
                -ms-interpolation-mode: bicubic;
            }

            /* RESET STYLES */
            img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
            }
            table {
                border-collapse: collapse !important;
            }
            body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
            }

            /* iOS BLUE LINKS */
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }

            /* MEDIA QUERIES */
            @media screen and (max-width: 480px) {
                .mobile-hide {
                    display: none !important;
                }
                .mobile-center {
                    text-align: center !important;
                }
            }

            /* ANDROID CENTER FIX */
            div[style*="margin: 16px 0;"] {
                margin: 0 !important;
            }
        </style>
    </head>
    <body
        style="
            margin: 0 !important;
            padding: 0 !important;
            background-color: #eeeeee;
        "
        bgcolor="#eeeeee"
    >
        <!-- HIDDEN PREHEADER TEXT -->
        <div
            style="
                display: none;
                font-size: 1px;
                color: #fefefe;
                line-height: 1px;
                font-family: Open Sans, Helvetica, Arial, sans-serif;
                max-height: 0px;
                max-width: 0px;
                opacity: 0;
                overflow: hidden;
            "
        >
            Our store takes care of sending all the products as soon as
            possible.
        </div>

        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td
                    align="center"
                    style="background-color: #eeeeee"
                    bgcolor="#eeeeee"
                >
                    <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="max-width: 600px"
                    >
                        <tr>
                            <td
                                align="center"
                                valign="top"
                                style="font-size: 0; padding: 35px"
                                bgcolor="#38A3A5"
                            >
                                <div
                                    style="
                                        display: inline-block;
                                        max-width: 50%;
                                        min-width: 100px;
                                        vertical-align: top;
                                        width: 100%;
                                    "
                                >
                                    <table
                                        align="left"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="max-width: 300px"
                                    >
                                        <tr>
                                            <td
                                                align="left"
                                                valign="top"
                                                style="
                                                    font-family: Open Sans,
                                                        Helvetica, Arial,
                                                        sans-serif;
                                                    font-size: 36px;
                                                    font-weight: 800;
                                                    line-height: 48px;
                                                "
                                                class="mobile-center"
                                            >
                                                <h1
                                                    style="
                                                        font-size: 36px;
                                                        font-weight: 800;
                                                        margin: 0;
                                                        color: #ffffff;
                                                    "
                                                >
                                                    COCO Mall 🥥
                                                </h1>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <div
                                    style="
                                        display: inline-block;
                                        max-width: 50%;
                                        min-width: 100px;
                                        vertical-align: top;
                                        width: 100%;
                                    "
                                    class="mobile-hide"
                                >
                                    <table
                                        align="left"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="max-width: 300px"
                                    >
                                        <tr>
                                            <td
                                                align="right"
                                                valign="top"
                                                style="
                                                    font-family: Open Sans,
                                                        Helvetica, Arial,
                                                        sans-serif;
                                                    font-size: 48px;
                                                    font-weight: 400;
                                                    line-height: 48px;
                                                "
                                            >
                                                <table
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    border="0"
                                                    align="right"
                                                >
                                                    <tr>
                                                        <td
                                                            style="
                                                                font-family: Open
                                                                        Sans,
                                                                    Helvetica,
                                                                    Arial,
                                                                    sans-serif;
                                                                font-size: 18px;
                                                                font-weight: 400;
                                                            "
                                                        ></td>
                                                        <td
                                                            style="
                                                                font-family: Open
                                                                        Sans,
                                                                    Helvetica,
                                                                    Arial,
                                                                    sans-serif;
                                                                font-size: 18px;
                                                                font-weight: 400;
                                                                line-height: 24px;
                                                            "
                                                        ></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td
                                align="center"
                                style="
                                    padding: 35px 35px 20px 35px;
                                    background-color: #ffffff;
                                "
                                bgcolor="#ffffff"
                            >
                                <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="max-width: 600px"
                                >
                                    <tr>
                                        <td
                                            align="center"
                                            style="
                                                font-family: Open Sans,
                                                    Helvetica, Arial, sans-serif;
                                                font-size: 16px;
                                                font-weight: 400;
                                                line-height: 24px;
                                                padding-top: 25px;
                                            "
                                        >
                                            <img
                                                src="https://res.cloudinary.com/cocomalls/image/upload/v1634777259/Email/email3_m5vpjt.png"
                                                width="175"
                                                height="120"
                                                style="
                                                    display: block;
                                                    border: 0px;
                                                "
                                            /><br />
                                            <h2
                                                style="
                                                    font-size: 30px;
                                                    font-weight: 800;
                                                    line-height: 36px;
                                                    color: #333333;
                                                    margin: 0;
                                                "
                                            >
                                                Thank You For Your Order!
                                            </h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            style="
                                                font-family: Open Sans,
                                                    Helvetica, Arial, sans-serif;
                                                font-size: 16px;
                                                font-weight: 400;
                                                line-height: 24px;
                                                padding-top: 10px;
                                            "
                                        >
                                            <p
                                                style="
                                                    font-size: 16px;
                                                    font-weight: 400;
                                                    line-height: 24px;
                                                    color: #777777;
                                                "
                                            >
                                                Our store will ship all products
                                                as soon as possible.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            style="padding-top: 20px"
                                        >
                                            <table
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                width="100%"
                                            >
                                                <tr>
                                                    <td
                                                        width="75%"
                                                        align="left"
                                                        bgcolor="#eeeeee"
                                                        style="
                                                            font-family: Open
                                                                    Sans,
                                                                Helvetica, Arial,
                                                                sans-serif;
                                                            font-size: 16px;
                                                            font-weight: 800;
                                                            line-height: 24px;
                                                            padding: 10px;
                                                        "
                                                    >
                                                        Order Confirmation #
                                                    </td>
                                                    <td
                                                        width="25%"
                                                        align="left"
                                                        bgcolor="#eeeeee"
                                                        style="
                                                            font-family: Open
                                                                    Sans,
                                                                Helvetica, Arial,
                                                                sans-serif;
                                                            font-size: 16px;
                                                            font-weight: 800;
                                                            line-height: 24px;
                                                            padding: 10px;
                                                        "
                                                    >
                                                        ${orderId}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        width="75%"
                                                        align="left"
                                                        style="
                                                            font-family: Open
                                                                    Sans,
                                                                Helvetica, Arial,
                                                                sans-serif;
                                                            font-size: 16px;
                                                            font-weight: 400;
                                                            line-height: 24px;
                                                            padding: 15px 10px
                                                                5px 10px;
                                                        "
                                                    >
                                                        ${products}
                                                    </td>
                                                    <td
                                                        width="25%"
                                                        align="left"
                                                        style="
                                                            font-family: Open
                                                                    Sans,
                                                                Helvetica, Arial,
                                                                sans-serif;
                                                            font-size: 16px;
                                                            font-weight: 400;
                                                            line-height: 24px;
                                                            padding: 15px 10px
                                                                5px 10px;
                                                        "
                                                    >
                                                        ${price}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        width="75%"
                                                        align="left"
                                                        style="
                                                            font-family: Open
                                                                    Sans,
                                                                Helvetica, Arial,
                                                                sans-serif;
                                                            font-size: 16px;
                                                            font-weight: 400;
                                                            line-height: 24px;
                                                            padding: 5px 10px;
                                                        "
                                                    ></td>
                                                    <td
                                                        width="25%"
                                                        align="left"
                                                        style="
                                                            font-family: Open
                                                                    Sans,
                                                                Helvetica, Arial,
                                                                sans-serif;
                                                            font-size: 16px;
                                                            font-weight: 400;
                                                            line-height: 24px;
                                                            padding: 5px 10px;
                                                        "
                                                    ></td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        width="75%"
                                                        align="left"
                                                        style="
                                                            font-family: Open
                                                                    Sans,
                                                                Helvetica, Arial,
                                                                sans-serif;
                                                            font-size: 16px;
                                                            font-weight: 400;
                                                            line-height: 24px;
                                                            padding: 5px 10px;
                                                        "
                                                    ></td>
                                                    <td
                                                        width="25%"
                                                        align="left"
                                                        style="
                                                            font-family: Open
                                                                    Sans,
                                                                Helvetica, Arial,
                                                                sans-serif;
                                                            font-size: 16px;
                                                            font-weight: 400;
                                                            line-height: 24px;
                                                            padding: 5px 10px;
                                                        "
                                                    ></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            align="left"
                                            style="padding-top: 20px"
                                        >
                                            <table
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                                width="100%"
                                            >
                                                <tr>
                                                    <td
                                                        width="75%"
                                                        align="left"
                                                        style="
                                                            font-family: Open
                                                                    Sans,
                                                                Helvetica, Arial,
                                                                sans-serif;
                                                            font-size: 16px;
                                                            font-weight: 800;
                                                            line-height: 24px;
                                                            padding: 10px;
                                                            border-top: 3px
                                                                solid #eeeeee;
                                                            border-bottom: 3px
                                                                solid #eeeeee;
                                                        "
                                                    >
                                                        TOTAL
                                                    </td>
                                                    <td
                                                        width="25%"
                                                        align="left"
                                                        style="
                                                            font-family: Open
                                                                    Sans,
                                                                Helvetica, Arial,
                                                                sans-serif;
                                                            font-size: 16px;
                                                            font-weight: 800;
                                                            line-height: 24px;
                                                            padding: 10px;
                                                            border-top: 3px
                                                                solid #eeeeee;
                                                            border-bottom: 3px
                                                                solid #eeeeee;
                                                        "
                                                    >
                                                        ${total}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td
                                align="center"
                                height="100%"
                                valign="top"
                                width="100%"
                                style="
                                    padding: 0 35px 35px 35px;
                                    background-color: #ffffff;
                                "
                                bgcolor="#ffffff"
                            >
                                <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="max-width: 660px"
                                >
                                    <tr>
                                        <td
                                            align="center"
                                            valign="top"
                                            style="font-size: 0"
                                        >
                                            <div
                                                style="
                                                    display: inline-block;
                                                    max-width: 50%;
                                                    min-width: 240px;
                                                    vertical-align: top;
                                                    width: 100%;
                                                "
                                            >
                                                <table
                                                    align="left"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="max-width: 300px"
                                                >
                                                    <tr>
                                                        <td
                                                            align="left"
                                                            valign="top"
                                                            style="
                                                                font-family: Open
                                                                        Sans,
                                                                    Helvetica,
                                                                    Arial,
                                                                    sans-serif;
                                                                font-size: 16px;
                                                                font-weight: 400;
                                                                line-height: 24px;
                                                            "
                                                        >
                                                            <p
                                                                style="
                                                                    font-weight: 800;
                                                                "
                                                            >
                                                                Delivery Address
                                                            </p>
                                                            <p>${direction}</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div
                                                style="
                                                    display: inline-block;
                                                    max-width: 50%;
                                                    min-width: 240px;
                                                    vertical-align: top;
                                                    width: 100%;
                                                "
                                            >
                                                <table
                                                    align="left"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="max-width: 300px"
                                                >
                                                    <tr>
                                                        <td
                                                            align="left"
                                                            valign="top"
                                                            style="
                                                                font-family: Open
                                                                        Sans,
                                                                    Helvetica,
                                                                    Arial,
                                                                    sans-serif;
                                                                font-size: 16px;
                                                                font-weight: 400;
                                                                line-height: 24px;
                                                            "
                                                        >
                                                            <p
                                                                style="
                                                                    font-weight: 800;
                                                                "
                                                            >
                                                                Estimated
                                                                Delivery Date
                                                            </p>
                                                            <p>
                                                                To be confirmed
                                                                by store
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td
                                align="center"
                                style="padding: 35px; background-color: #ffffff"
                                bgcolor="#ffffff"
                            >
                                <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="max-width: 600px"
                                >
                                    <tr>
                                        <td
                                            align="left"
                                            style="
                                                font-family: Open Sans,
                                                    Helvetica, Arial, sans-serif;
                                                font-size: 14px;
                                                font-weight: 400;
                                                line-height: 24px;
                                            "
                                        >
                                            <p
                                                style="
                                                    font-size: 14px;
                                                    font-weight: 400;
                                                    line-height: 20px;
                                                    color: #777777;
                                                "
                                            >
                                                If you didn't create an account
                                                using this email address, please
                                                ignore this email or >.
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
</html>

`;
    return text;
}

function templateFailure() {
    let text = `
      <!DOCTYPE html>
      <html>
          <head>
              <title></title>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <style type="text/css">
                  /* CLIENT-SPECIFIC STYLES */
                  body,
                  table,
                  td,
                  a {
                      -webkit-text-size-adjust: 100%;
                      -ms-text-size-adjust: 100%;
                  }
                  table,
                  td {
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                  }
                  img {
                      -ms-interpolation-mode: bicubic;
                  }
      
                  /* RESET STYLES */
                  img {
                      border: 0;
                      height: auto;
                      line-height: 100%;
                      outline: none;
                      text-decoration: none;
                  }
                  table {
                      border-collapse: collapse !important;
                  }
                  body {
                      height: 100% !important;
                      margin: 0 !important;
                      padding: 0 !important;
                      width: 100% !important;
                  }
      
                  /* iOS BLUE LINKS */
                  a[x-apple-data-detectors] {
                      color: inherit !important;
                      text-decoration: none !important;
                      font-size: inherit !important;
                      font-family: inherit !important;
                      font-weight: inherit !important;
                      line-height: inherit !important;
                  }
      
                  /* MEDIA QUERIES */
                  @media screen and (max-width: 480px) {
                      .mobile-hide {
                          display: none !important;
                      }
                      .mobile-center {
                          text-align: center !important;
                      }
                  }
      
                  /* ANDROID CENTER FIX */
                  div[style*="margin: 16px 0;"] {
                      margin: 0 !important;
                  }
              </style>
          </head>
          <body
              style="
                  margin: 0 !important;
                  padding: 0 !important;
                  background-color: #eeeeee;
              "
              bgcolor="#eeeeee"
          >
              <!-- HIDDEN PREHEADER TEXT -->
              <div
                  style="
                      display: none;
                      font-size: 1px;
                      color: #fefefe;
                      line-height: 1px;
                      font-family: Open Sans, Helvetica, Arial, sans-serif;
                      max-height: 0px;
                      max-width: 0px;
                      opacity: 0;
                      overflow: hidden;
                  "
              >
                  Our store takes care of sending all the products as soon as
                  possible.
              </div>
      
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                      <td
                          align="center"
                          style="background-color: #eeeeee"
                          bgcolor="#eeeeee"
                      >
                          <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="max-width: 600px"
                          >
                              <tr>
                                  <td
                                      align="center"
                                      valign="top"
                                      style="font-size: 0; padding: 35px"
                                      bgcolor="#38A3A5"
                                  >
                                      <div
                                          style="
                                              display: inline-block;
                                              max-width: 50%;
                                              min-width: 100px;
                                              vertical-align: top;
                                              width: 100%;
                                          "
                                      >
                                          <table
                                              align="left"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              width="100%"
                                              style="max-width: 300px"
                                          >
                                              <tr>
                                                  <td
                                                      align="left"
                                                      valign="top"
                                                      style="
                                                          font-family: Open Sans,
                                                              Helvetica, Arial,
                                                              sans-serif;
                                                          font-size: 36px;
                                                          font-weight: 800;
                                                          line-height: 48px;
                                                      "
                                                      class="mobile-center"
                                                  >
                                                      <h1
                                                          style="
                                                              font-size: 36px;
                                                              font-weight: 800;
                                                              margin: 0;
                                                              color: #ffffff;
                                                          "
                                                      >
                                                          COCO Mall 🥥
                                                      </h1>
                                                  </td>
                                              </tr>
                                          </table>
                                      </div>
      
                                      <div
                                          style="
                                              display: inline-block;
                                              max-width: 50%;
                                              min-width: 100px;
                                              vertical-align: top;
                                              width: 100%;
                                          "
                                          class="mobile-hide"
                                      >
                                          <table
                                              align="left"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              width="100%"
                                              style="max-width: 300px"
                                          >
                                              <tr>
                                                  <td
                                                      align="right"
                                                      valign="top"
                                                      style="
                                                          font-family: Open Sans,
                                                              Helvetica, Arial,
                                                              sans-serif;
                                                          font-size: 48px;
                                                          font-weight: 400;
                                                          line-height: 48px;
                                                      "
                                                  >
                                                      <table
                                                          cellspacing="0"
                                                          cellpadding="0"
                                                          border="0"
                                                          align="right"
                                                      >
                                                          <tr>
                                                              <td
                                                                  style="
                                                                      font-family: Open
                                                                              Sans,
                                                                          Helvetica,
                                                                          Arial,
                                                                          sans-serif;
                                                                      font-size: 18px;
                                                                      font-weight: 400;
                                                                  "
                                                              ></td>
                                                              <td
                                                                  style="
                                                                      font-family: Open
                                                                              Sans,
                                                                          Helvetica,
                                                                          Arial,
                                                                          sans-serif;
                                                                      font-size: 18px;
                                                                      font-weight: 400;
                                                                      line-height: 24px;
                                                                  "
                                                              ></td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td
                                      align="center"
                                      style="
                                          padding: 35px 35px 20px 35px;
                                          background-color: #ffffff;
                                      "
                                      bgcolor="#ffffff"
                                  >
                                      <table
                                          align="center"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="max-width: 600px"
                                      >
                                          <tr>
                                              <td
                                                  align="center"
                                                  style="
                                                      font-family: Open Sans,
                                                          Helvetica, Arial, sans-serif;
                                                      font-size: 16px;
                                                      font-weight: 400;
                                                      line-height: 24px;
                                                      padding-top: 25px;
                                                  "
                                              >
                                                  <img
                                                      src="https://res.cloudinary.com/cocomalls/image/upload/v1634777230/Email/email2_craun4.png"
                                                      width="300"
                                                      height="120"
                                                      style="
                                                          display: block;
                                                          border: 0px;
                                                      "
                                                  /><br />
                                                  <h2
                                                      style="
                                                          font-size: 30px;
                                                          font-weight: 800;
                                                          line-height: 36px;
                                                          color: #333333;
                                                          margin: 0;
                                                      "
                                                  >
                                                      Something wrong, sorry!
                                                  </h2>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td
                                                  align="left"
                                                  style="
                                                      font-family: Open Sans,
                                                          Helvetica, Arial, sans-serif;
                                                      font-size: 16px;
                                                      font-weight: 400;
                                                      line-height: 24px;
                                                      padding-top: 10px;
                                                  "
                                              >
                                                  <p
                                                      style="
                                                          font-size: 16px;
                                                          font-weight: 400;
                                                          line-height: 24px;
                                                          color: #777777;
                                                      "
                                                  >
                                                      we had a problem with your
                                                      transfer, you must repeat your
                                                      purchase or contact your bank.
                                                  </p>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
      
                              <tr>
                                  <td
                                      align="center"
                                      style="padding: 35px; background-color: #ffffff"
                                      bgcolor="#ffffff"
                                  >
                                      <table
                                          align="center"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="max-width: 600px"
                                      >
                                          <tr>
                                              <td
                                                  align="left"
                                                  style="
                                                      font-family: Open Sans,
                                                          Helvetica, Arial, sans-serif;
                                                      font-size: 14px;
                                                      font-weight: 400;
                                                      line-height: 24px;
                                                  "
                                              >
                                                  <p
                                                      style="
                                                          font-size: 14px;
                                                          font-weight: 400;
                                                          line-height: 20px;
                                                          color: #777777;
                                                      "
                                                  >
                                                      If you didn't create an account
                                                      using this email address, please
                                                      ignore this email.
                                                  </p>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </body>
      </html>
      
  
  `;
    return text;
}

function templatePending() {
    let text = `<!DOCTYPE html>
    <html>
        <head>
            <title></title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <style type="text/css">
                /* CLIENT-SPECIFIC STYLES */
                body,
                table,
                td,
                a {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
                table,
               /*  td {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                } */
                img {
                    -ms-interpolation-mode: bicubic;
                }
    
                /* RESET STYLES */
                img {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                }
                table {
                    border-collapse: collapse !important;
                }
                body {
                    height: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                }
    
                /* iOS BLUE LINKS */
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
    
                /* MEDIA QUERIES */
                @media screen and (max-width: 480px) {
                    .mobile-hide {
                        display: none !important;
                    }
                    .mobile-center {
                        text-align: center !important;
                    }
                }
    
                /* ANDROID CENTER FIX */
                div[style*="margin: 16px 0;"] {
                    margin: 0 !important;
                }
            </style>
        </head>
        <body
            style="
                margin: 0 !important;
                padding: 0 !important;
                background-color: #eeeeee;
            "
            bgcolor="#eeeeee"
        >
            <!-- HIDDEN PREHEADER TEXT -->
            <div
                style="
                    display: none;
                    font-size: 1px;
                    color: #fefefe;
                    line-height: 1px;
                    font-family: Open Sans, Helvetica, Arial, sans-serif;
                    max-height: 0px;
                    max-width: 0px;
                    opacity: 0;
                    overflow: hidden;
                "
            >
                Our store takes care of sending all the products as soon as
                possible.
            </div>
    
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td
                        align="center"
                        style="background-color: #eeeeee"
                        bgcolor="#eeeeee"
                    >
                        <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="max-width: 600px"
                        >
                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="font-size: 0; padding: 35px"
                                    bgcolor="#38A3A5"
                                >
                                    <div
                                        style="
                                            display: inline-block;
                                            max-width: 50%;
                                            min-width: 100px;
                                            vertical-align: top;
                                            width: 100%;
                                        "
                                    >
                                        <table
                                            align="left"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="max-width: 300px"
                                        >
                                            <tr>
                                                <td
                                                    align="left"
                                                    valign="top"
                                                    style="
                                                        font-family: Open Sans,
                                                            Helvetica, Arial,
                                                            sans-serif;
                                                        font-size: 36px;
                                                        font-weight: 800;
                                                        line-height: 48px;
                                                    "
                                                    class="mobile-center"
                                                >
                                                    <h1
                                                        style="
                                                            font-size: 36px;
                                                            font-weight: 800;
                                                            margin: 0;
                                                            color: #ffffff;
                                                        "
                                                    >
                                                        COCO Mall 🥥 
                                                    </h1>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
    
                                    <div
                                        style="
                                            display: inline-block;
                                            max-width: 50%;
                                            min-width: 100px;
                                            vertical-align: top;
                                            width: 100%;
                                        "
                                        class="mobile-hide"
                                    >
                                        <table
                                            align="left"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="max-width: 300px"
                                        >
                                            <tr>
                                                <td
                                                    align="right"
                                                    valign="top"
                                                    style="
                                                        font-family: Open Sans,
                                                            Helvetica, Arial,
                                                            sans-serif;
                                                        font-size: 48px;
                                                        font-weight: 400;
                                                        line-height: 48px;
                                                    "
                                                >
                                                    <table
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                        align="right"
                                                    >
                                                        <tr>
                                                            <td
                                                                style="
                                                                    font-family: Open
                                                                            Sans,
                                                                        Helvetica,
                                                                        Arial,
                                                                        sans-serif;
                                                                    font-size: 18px;
                                                                    font-weight: 400;
                                                                "
                                                            ></td>
                                                            <td
                                                                style="
                                                                    font-family: Open
                                                                            Sans,
                                                                        Helvetica,
                                                                        Arial,
                                                                        sans-serif;
                                                                    font-size: 18px;
                                                                    font-weight: 400;
                                                                    line-height: 24px;
                                                                "
                                                            ></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    align="center"
                                    style="
                                        padding: 35px 35px 20px 35px;
                                        background-color: #ffffff;
                                    "
                                    bgcolor="#ffffff"
                                >
                                    <table
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="max-width: 600px"
                                    >
                                        <tr>
                                            <td
                                                align="center"
                                                style="
                                                    font-family: Open Sans,
                                                        Helvetica, Arial, sans-serif;
                                                    font-size: 16px;
                                                    font-weight: 400;
                                                    line-height: 24px;
                                                    padding-top: 25px;
                                                "
                                            >
                                                <img
                                                    src='https://res.cloudinary.com/cocomalls/image/upload/v1634777169/Email/email1_se2iy9.png'
                                                    width="300"
                                                    height="120"
                                                    style="
                                                        display: block;
                                                        border: 0px;
                                                    "
                                                /><br />
                                                <h2
                                                    style="
                                                        font-size: 30px;
                                                        font-weight: 800;
                                                        line-height: 36px;
                                                        color: #333333;
                                                        margin: 0;
                                                    "
                                                >
                                                We are working for you right now, but first, you must make the payment at one of the authorized points.
                                                </h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                align="left"
                                                style="
                                                    font-family: Open Sans,
                                                        Helvetica, Arial, sans-serif;
                                                    font-size: 16px;
                                                    font-weight: 400;
                                                    line-height: 24px;
                                                    padding-top: 10px;
                                                "
                                            >
                                                <p
                                                    style="
                                                        font-size: 16px;
                                                        font-weight: 400;
                                                        line-height: 24px;
                                                        color: #777777;
                                                    "
                                                >
                                                    
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
    
                            <tr>
                                <td
                                    align="center"
                                    style="padding: 35px; background-color: #ffffff"
                                    bgcolor="#ffffff"
                                >
                                    <table
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="max-width: 600px"
                                    >
                                        <tr>
                                            <td
                                                align="left"
                                                style="
                                                    font-family: Open Sans,
                                                        Helvetica, Arial, sans-serif;
                                                    font-size: 14px;
                                                    font-weight: 400;
                                                    line-height: 24px;
                                                "
                                            >
                                                <p
                                                    style="
                                                        font-size: 14px;
                                                        font-weight: 400;
                                                        line-height: 20px;
                                                        color: #777777;
                                                    "
                                                >
                                                    If you didn't create an account
                                                    using this email address, please
                                                    ignore this email.
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
    </html>
    
    `
    return text
}

module.exports = { templateSuccess, templateFailure , templatePending};
