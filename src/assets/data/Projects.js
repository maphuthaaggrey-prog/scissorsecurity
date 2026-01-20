export const projects = [
    {
      id: 1,
      title: "Power Plant Operating and Specialised Cleaning - Coal Plant, Ash Plant, Dust Handling Plant, Fuel & Lub Oil Plant, Compressor Plant, Sulphur Plant, Propane Gas Plant, CW Plant, Ash Dams",
      client: "Komati Power Station (Eskom)",
      personnel: ["Strike Mnguni", "Stephen Dolamo"],
      roles: "Common Plant Supervisors",
      scope: [
        "Common plant isolating/ de-isolating, issuing and revoking of (PTW) Permits To Work and Work Permits (PSR/ORHVS regulation adhered)",
        "Feeding of coal from Coal Stock Yard to the coal bunkers",
        "Operating of Tripper Cars",
        "Cleaning of coal conveyor belts, grizzly bars, tripper cars hangups, walkways, unblocking of chutes, and clearing of coal spillages underneath the coal conveyors and surrounding areas, cleaning plant structures (SWP-Safe Working Procedure)",
        "Ashing of ash hoppers, cleaning and housekeeping",
        "Dusting and emptying of dust hoppers, unblocking of dust hoppers, cleaning and housekeeping",
        "Cleaning of sluiceways trenches",
        "Transferring and depositing of coarse ash and dust material to ash dams",
        "Offloading, transferring and cleaning of Bulk Fuel Oil and Lub oil. (GHS & SDS standard adhered)",
        "Offloading and cleaning of Sulphur. (GHS standard adhered)",
        "Offloading of Propane Gas. (GHS standard adhered)",
        "Ensuring site cleanliness and controlling of waste"
      ],
      duration: "9 years",
      value: "N/A",
      notes: "Adhered strictly to safety regulation, including avoiding electrical equipment during cleaning (PSR/ORHVS REGULATIONS adhered). Ensure SOP & SWP (Standard Operating Procedures & Safe Working Procedures) were adhered to at all times, equipment was cleaned O&M manual. OSH Act Regulation 85 of 1993 adhered",
      contact: {
        name: "Ryno Landman",
        position: "Eskom Rotek Industries PROJECT MANAGER",
        phone: "082 805-0833"
      },
      proof: "The Client mentioned as the contact person can be contact to confirm and verify the records"
    },
    {
      id: 2,
      title: "Coal Plant specialized cleaning",
      client: "Matla Power Station (Eskom)",
      personnel: ["Strike Mnguni"],
      roles: "Coal Plant Supervisor",
      scope: [
        "Cleaning of coal conveyor belts, grizzly bars, tripper cars hangups, walkways, unblocking of chutes, and clearing of coal spillages underneath the coal conveyors and surrounding areas, cleaning plant structures (SWP-Safe Working Procedure). OSH Act Regulation 85 of 1993 adhered",
        "Attending call outs and emergencies during wet coal season",
        "Ensuring site cleanliness and controlling of waste"
      ],
      duration: "2 years",
      value: "N/A",
      notes: "Adhered strictly to safety regulation, including avoiding electrical equipment during cleaning. Ensure SOP & SWP (Standard Operating Procedures & Safe Working Procedures) were adhered to at all times, equipment was cleaned O&M manual. OSH Act Regulation 85 of 1993 adhered",
      contact: {
        name: "Collin Monoge",
        position: "Contractor Manager (Eskom)",
        phone: "073 796-1602"
      },
      proof: "The Client mentioned as the contact person can be contact to confirm and verify the records"
    },
    {
      id: 3,
      title: "Station Cleaning Outside Plant",
      client: "Kriel Power Station (Eskom)",
      personnel: ["Strike Mnguni"],
      roles: "Site Manager",
      scope: [
        "Cleaning of Coal Plant, Ash Plant, Dust Handling Plant, Fuel & Lub Oil Plant, Compressor Plant, WTP, Service Pump House, AWR pump house, Sulphur Plant, CW Plant, Ash Pipe Lines, Station Roads, Station Parking and surrounding areas (SWP-Safe Working Procedure). Ensuring site cleanliness and controlling of waste",
        "Managing Machinery and yellow plant i.e Vacuum Truck, HP Machine, TLB, Tipper Trucks, Bobcat, Road sweepers (South African GMR, Compliance, Legal and Regulatory Context adherence)",
        "Cleaning of inside plant – Turbine Sub-basement, Turbine, EFT, Generators, Coal Feeders right to top boiler areas. (SWP-Safe Working Procedure). Ensuring site cleanliness and controlling of waste"
      ],
      duration: "3 years",
      value: "N/A",
      notes: "Kriel Power Station won the Housekeeping Challenge in that financial year. Adhered strictly to safety regulation, including avoiding electrical equipment during cleaning. Ensure SOP & SWP (Standard Operating Procedures & Safe Working Procedures) were adhered to at all times, equipment was cleaned as per O&M manual. (South African GMR, Compliance, Legal and Regulatory Context adherence) OSH Act Regulation 85 of 1993 adhered",
      contact: {
        name: "Piet Aphane",
        position: "Contractor Manager (Eskom)",
        phone: "072 138-6790"
      },
      proof: "The Client mentioned contact person(s) can be contact to confirm and verify the records"
    },
    {
      id: 4,
      title: "Coal Plant Specialised Cleaning",
      client: "Lethabo Power Station (Eskom)",
      personnel: ["Strike Mnguni"],
      roles: "Site Manager",
      scope: [
        "Cleaning of Coal Plant from S14, TH08, T1A, T1B to Over Silos T6A & T6B, Under Silos T7A – TF, Over Bunkers T8A – T8F, T9A-T9F, T10A-T10F, T11A-T11F, T12A-T12F, T13A-T13F, T14A-T14F (SOP- Standard Operating Procedure/ SWP-Safe Working Procedure). Ensuring site cleanliness and controlling of waste",
        "Cleaning and unblocking of chutes",
        "Cleaning of Counterweight",
        "Cleaning of Silt Traps",
        "Cleaning of travel shuttles",
        "Cleaning of cables wrags",
        "Attending call outs and emergencies during wet coal season"
      ],
      duration: "1 year",
      value: "N/A",
      notes: "Adhered strictly to safety regulation, including avoiding electrical equipment during cleaning. Ensure SOP & SWP (Standard Operating Procedures & Safe Working Procedures) were adhered to at all times, equipment was cleaned O&M manual. OSH Act Regulation 85 of 1993 adhered",
      contact: {
        name: "Nyiko Mathebula",
        position: "Contractor Manager (Eskom)",
        phone: "065 977-0414"
      },
      proof: "The Client mentioned contact person(s) can be contact to confirm and verify the records"
    }
  ];
  
  export const declaration = "The Director Mr Strike Mnguni and Site Manager Mr Stephen Dolamo jointly completed Power Station Plant Training NQF4 with Common Plant Supervisors Experience (Plant Safety Regulation Certificates) and immense, vast knowledge, experience in Coal Plant Specialized Cleaning under Eskom Rotek Industries and multiple Eskom Power Station Coal Plant Specialized Cleaning Experience.";
  
  // Helper functions
  export const getProjectById = (id) => {
    return projects.find(project => project.id === id);
  };
  
  export const getProjectsByPersonnel = (personnelName) => {
    return projects.filter(project => 
      project.personnel.some(person => person.includes(personnelName))
    );
  };
  
  export const getProjectsByClient = (clientName) => {
    return projects.filter(project => 
      project.client.toLowerCase().includes(clientName.toLowerCase())
    );
  };
  
  export default projects;