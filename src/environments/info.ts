export const Info = {
    title: ["แบบสำรวจความพึงพอใจเกี่ยวกับการจัดทำและนำส่งข้อมูลใบกำกับภาษีอิเล็กทรอนิกส์",
        "และใบรับอิเล็กทรอนิกส์ (e-Tax Invoice & e-Receipt)"],
    sections: [
        "",
        "ข้อมูลทั่วไปของผู้ตอบแบบสอบถาม",
        "ส่วนที่ 1 แบบสอบถามความคิดเห็น",
        "10. ความพึงพอใจเกี่ยวกับการจัดทำและนำส่งข้อมูลใบกำกับภาษีอิเล็กทรอนิกส์และใบรับอิเล็กทรอนิกส์",
        "ส่วนที่ 2 ประเมินความพึงพอใจในภาพรวม",
        "ส่วนที่ 3 ข้อเสนอแนะ (ถ้ามี)",
        "ขอบคุณที่ท่านให้ความร่วมมือในการตอบแบบสอบถาม",
        "email: e_taxinvoice@rdserver.rd.go.th"
    ],
    question: [
        "",
        "1. เพศ",
        "2. อายุ",
        "3. วุฒิการศึกษา",
        "4. อาชีพ",
        "5. ปัจจุบันหน่วยงานของท่านเป็นผู้ออก/ผู้รับใบกำกับภาษีอิเล็กทรอนิกส์และใบรับอิเล็กทรอนิกส์หรือไม่",
        "6. ในอนาคตหน่วยงานของท่านสนใจที่จะเป็นผู้ออก/ผู้รับใบกำกับภาษีอิเล็กทรอนิกส์และใบรับอิเล็กทรอนิกส์หรือไม่",
        "7. หน่วยงานของท่านมีนโยบายที่จะออกใบกำกับภาษีอิเล็กทรอนิกส์และใบรับอิเล็กทรอนิกส์เมื่อใด",
        "8. สาเหตุที่หน่วยงานของท่านยังไม่พร้อมที่จะจัดทำใบกำกับภาษีอิเล็กทรอนิกส์และใบรับอิเล็กทรอนิกส์",
        "9. หน่วยงานของท่านต้องการให้กรมสรรพากรสนับสนุนเรื่องใด",
        "10.1 ท่านเห็นว่า e-Tax Invoice & e-Receipt มีประโยชน์ต่อบริษัท",
        "10.2 ท่านเห็นว่า e-Tax Invoice & e-Receipt ลดขั้นตอนกระบวนงาน ลดต้นทุนค่าใช้จ่าย และเพิ่มประสิทธิภาพการทำงานของบริษัท",
        "10.3 ท่านมีความพึงพอใจและยินดีที่จะแนะนำ e-Tax Invoice & e-Receipt ให้บริษัทในเครือหรือคู่ค้าใช้บริการ",
        "10.4 ท่านคิดว่าการใช้ใบกำกับภาษีอิเล็กทรอนิกส์มีความน่าเชื่อถือ",
        "10.5 ท่านมีความมั่นใจที่จะรับใบกำกับภาษีอิเล็กทรอนิกส์ และใบรับอิเล็กทรอนิกส์",
        "ท่านมีความพึงพอใจในภาพรวมของการจัดทำและนำส่งใบกำกับภาษีอิเล็กทรอนิกส์",
        "อื่น ๆ \xa0(ถ้ามี)",
        "และใบรับอิเล็กทรอนิกส์ (e-Tax Invoice & e-Receipt)"
    ],
    gender: [
        {
            type: "M",
            value: "ชาย"
        },
        {
            type: "F",
            value: "หญิง"
        }
    ],
    age: [
        // {
        //     type: "G1",
        //     value: "ต่ำกว่า 20 ปี"
        // },
        {
            type: "G1",
            value: "20 - 30 ปี"
        },
        {
            type: "G2",
            value: "31 - 40 ปี"
        },
        {
            type: "G3",
            value: "41 - 50 ปี"
        },
        {
            type: "G4",
            value: "51 ปีขึ้นไป"
        }
    ],
    education: [
        {
            type: "E1",
            value: "ต่ำกว่าปริญญาตรี"
        },
        {
            type: "E2",
            value: "ปริญญาตรี"
        },
        {
            type: "E3",
            value: "สูงกว่าปริญญาตรี"
        }
    ],
    occupation: [
        {
            type: "OFFICIAL",
            value: "รับราชการ/รัฐวิสาหกิจ"
        },
        {
            type: "EMPLOYEE",
            value: "พนักงานเอกชน"
        },
        {
            type: "GENERAL",
            value: "รับจ้างทั่วไป"
        },
        {
            type: "BUSINESS OWNER",
            value: "เจ้าของกิจการ"
        },
        {
            type: "FREELANCE",
            value: "อาชีพอิสระ/ค้าขาย"
        },
        {
            type: "OTHER",
            value: "อื่น ๆ \xa0(โปรดระบุ)"
        }
    ],
    currentuser: [
        {
            type: "NO",
            value: "ไม่ได้เป็นผู้ออก/ผู้รับ"
        },
        {
            type: "YES",
            value: "เป็นผู้ออก/ผู้รับ (ข้ามไปข้อ 9 - 10)"
        }
    ],
    futureinteresting: [
        {
            type: "YES",
            value: "สนใจ"
        },
        {
            type: "NO",
            value: "ไม่สนใจ (ข้ามไปข้อ 8)"
        }
    ],
    policyterms: [
        {
            type: "<=6",
            value: "ภายใน 6 เดือน"
        },
        {
            type: "<=12",
            value: "ภายใน 6 - 12 เดือน"
        },
        {
            type: ">12",
            value: "12 เดือน ขึ้นไป"
        },
    ],
    reasonavailability: [
        {
            type: "BUDGET",
            value: "งบประมาณ"
        },
        {
            type: "UNAVAILABLE",
            value: "ระบบงาน/เจ้าหน้าที่ยังไม่พร้อม"
        },
        {
            type: "KNOWLEDGE",
            value: "อยู่ในระหว่างศึกษาและทำความเข้าใจระบบ"
        },
        {
            type: "OTHER",
            value: "อื่น ๆ \xa0(โปรดระบุ)"
        }
    ],
    supportrequest: [
        {
            type: "TAX AND BENEFITS",
            value: "มาตการภาษีและสิทธิประโยชน์ที่เกี่ยวข้อง"
        },
        {
            type: "FORMAT DOCUMENT",
            value: "มาตการด้านปฏิบัติเกี่ยวกับการจัดการเอกสารทางภาษีที่อยู่ในรูปแบบอิเล็กทรอนิกส์"
        },
        {
            type: "KNOWLEDGE INFO",
            value: "การเสริมสร้างความรู้/ข้อมูลข่าวสาร"
        },
        {
            type: "OTHER",
            value: "อื่น ๆ \xa0(โปรดระบุ)"
        }
    ],
    pt: [
        {
            type: "5",
            value: "พอใจมาก"
        },
        {
            type: "4",
            value: "พอใจ"
        },
        {
            type: "3",
            value: "ปานกลาง"
        },
        {
            type: "2",
            value: "น้อย"
        },
        {
            type: "1",
            value: "น้อยที่สุด"
        }
    ],
    p: [
        "5",
        "4",
        "3",
        "2",
        "1"
    ]
}