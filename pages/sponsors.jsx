import React from 'react';
import Base from "../components/shared";
import Topbar from "../components/shared/Topbar";
import styled from "@emotion/styled";
import FooterArea from "../components/landing/Footer";

const SponsorPage = styled.section`
  min-height: 45vh;
  margin-top: 64px;
  background: #112;
  color: #eee;
  padding: 8vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    color: #FFAB00;
    font-size: calc(1.8rem + 2vw);
    font-weight: 600;
  }
  h3 {
    color: #FFAB00;
    font-size: calc(1.5rem + 1vw);
  }
`;


const SponsorCardWrap = styled.div`
    border: 4px solid #FFAB00;
    border-radius: 12px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    background: white;
    color: black;
    text-align: left;
    h2 {
        font-weight: 600;
        font-size: calc(1.35rem + 1vw);
    }
`;

const SponsorsPage = () => {

    return <Base meta={{ title: 'Sponsors' }}>
        <Topbar />
        <SponsorPage>
            <div className="container-lg p-2 my-3">
                <div className="my-4">
                    <h1 className="font-weight-bold display-4 mb-4">Our Sponsors</h1>
                </div>
                <h3 className="my-4">Platinum Sponsor</h3>
                <SponsorCardWrap>
                    <div className="row mx-0">
                        <div className="col-md-5 d-flex align-items-center p-2">
                            <a href="https://www.siemens.com/global/en.html" target="_blank" rel="nofollow noreferrer">
                                <img
                                    alt="Siemens" draggable="false"
                                    src={require('../images/sponsors/seimens.png')}
                                    className="w-100"
                                />
                            </a>
                        </div>
                        <div className="col-md-7 p-2">
                            <h2 style={{ fontSize: "calc(1.75rem + 2.5vw)" }}>Siemens</h2>
                            <div className="p-2">
                                Siemens is a technology company centered on the industries that form the backbone of economies –
                                manufacturing, infrastructure, and transport. Our technology empowers our customers to transform
                                their industries - to create more agile and productive factories, more intelligent and efficient
                                buildings and grids, more sustainable transit. We develop innovations to create impact for our
                                customers. Our smart microgrids ensure reliable supplies of renewable energy. Our digital twins
                                are helping customers to bring life-saving drugs to market much faster. Our AI software predicts
                                and prevents trains from breaking down. We make real-world technology that works for everyone.
                            </div>
                            <div className="p-2">
                                <a
                                    href="https://www.siemens.com/global/en.html" target="_blank" rel="nofollow noreferrer"
                                    className="btn btn-primary rounded-0 px-4 py-3"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </SponsorCardWrap>
                <h3 className="my-4">Gold Sponsor</h3>
                <SponsorCardWrap>
                    <div className="row mx-0">
                        <div className="col-md-5 d-flex align-items-center p-2">
                            <a href="https://www.vmware.com/in/company.html" target="_blank" rel="nofollow noreferrer">
                                <img
                                    alt="VMware" draggable="false"
                                    src={require('../images/sponsors/vmware.png')}
                                    className="w-100"
                                />
                            </a>
                        </div>
                        <div className="col-md-7 p-2">
                            <h2 style={{ fontSize: "calc(1.65rem + 2.2vw)" }}>VMware</h2>
                            <div className="p-2">
                                VMware streamlines the journey for organizations to become digital businesses that deliver better
                                experiences to their customers and empower employees to do their best work. Our software spans App
                                Modernization, Cloud, Networking & Security and Digital Workspace. We modernize application
                                development to accelerate digital innovation. We enable you to build, run, manage, connect and
                                protect all of your apps on any cloud. We connect and secure apps and data, regardless of where
                                they run, from data center to cloud to edge infrastructure. We leverage your infrastructure to
                                protect apps and data from endpoint to cloud. We leverage your infrastructure to protect
                                apps and data from endpoint to cloud.
                            </div>
                            <div className="p-2">
                                <a
                                    href="https://www.vmware.com/in/company.html" target="_blank" rel="nofollow noreferrer"
                                    className="btn btn-primary rounded-0 px-4 py-3"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </SponsorCardWrap>
                <h3 className="my-4">Associate Sponsors</h3>
                <div className="row mx-0">
                    <div className="col-md-6 col-12 p-2">
                        <SponsorCardWrap>
                            <div className="p-2 text-center">
                                {/*<a href="https://crowdstrike.com/about-crowdstrike/" target="_blank" rel="nofollow noreferrer">*/}
                                    <img
                                        alt="CrowdStrike" draggable="false"
                                        src={require('../images/sponsors/crowdstrike.png')}
                                        style={{ maxHeight: '250px', maxWidth: '100%' }}
                                    />
                                {/*</a>*/}
                            </div>
                            {/*<div className="p-2" style={{ fontSize: '14px' }}>*/}
                            {/*    CrowdStrike is a leading cybersecurity company protecting customers from all cyber threats by*/}
                            {/*    leveraging its Security Cloud to stop breaches. From its inception in 2011, driven by George Kurtz’s*/}
                            {/*    vision, CrowdStrike was created as a different kind of cybersecurity company. Cloud-native,*/}
                            {/*    CrowdStrike immediately brought a threat perspective, effectiveness, scalability, and flexibility*/}
                            {/*    never seen before in the industry – seamlessly aligning People, Technology, and Processes.*/}
                            {/*    The CrowdStrike Falcon platform has revolutionized enterprise security for the cloud era.*/}
                            {/*    Its single lightweight-agent architecture leverages artificial intelligence (AI) and offers*/}
                            {/*    real-time protection and visibility across the enterprise, preventing attacks on endpoints and*/}
                            {/*    workloads on or off the network.*/}
                            {/*</div>*/}
                            {/*<div className="p-2">*/}
                            {/*    <a*/}
                            {/*        href="https://crowdstrike.com/about-crowdstrike/" target="_blank" rel="nofollow noreferrer"*/}
                            {/*        className="btn btn-primary rounded-0 px-4 py-3"*/}
                            {/*    >*/}
                            {/*        Read More*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </SponsorCardWrap>
                    </div>
                </div>
                <h3 className="my-4">Prize Sponsors</h3>
                <div className="row mx-0">
                    <div className="col-md-6 col-12 p-2">
                        <SponsorCardWrap>
                            <div className="p-2 text-center">
                                <a href="https://notsosecure.com/about/" target="_blank" rel="nofollow noreferrer">
                                    <img
                                        alt="CrowdStrike" draggable="false"
                                        src={require('../images/sponsors/notsosecure.png')}
                                        style={{ maxHeight: '250px', maxWidth: '100%' }}
                                    />
                                </a>
                            </div>
                            <div className="p-2" style={{ fontSize: '14px' }}>
                                NotSoSecure was founded by two industry-recognised people; Dan Haagman is a well-known Cyber Security
                                entrepreneur (14 years in the market) who founded one of the UK’s leading Pen Testing, Hacking
                                Education and Computer Forensics companies that was acquired by the Global Management Consultancy,
                                PA Consulting in 2011. In forming NotSoSecure, the founders set out to build a company that was
                                globally recognised in the field of Penetration Testing and Hacking Training but also one that
                                kept true to its roots of being a boutique specialist firm; practical, to the point, relationship
                                oriented. ey to NotSoSecure is the fact that we keep our trading model extremely simple.
                                No distractions, no conflicts of interest, a focus on what the business is really good at.
                                This is around the world, primarily in the USA (West and East), UK and Northern / Western Europe.
                            </div>
                            <div className="p-2">
                                <a
                                    href="https://notsosecure.com/about/" target="_blank" rel="nofollow noreferrer"
                                    className="btn btn-primary rounded-0 px-4 py-3"
                                >
                                    Read More
                                </a>
                            </div>
                        </SponsorCardWrap>
                    </div>
                    <div className="col-md-6 col-12 p-2">
                        <SponsorCardWrap>
                            <div className="p-2 text-center">
                                <a href="https://www.fireeye.com/company.html" target="_blank" rel="nofollow noreferrer">
                                    <img
                                        alt="CrowdStrike" draggable="false"
                                        src={require('../images/sponsors/fireeye.png')}
                                        style={{ maxHeight: '250px', maxWidth: '100%' }}
                                    />
                                </a>
                            </div>
                            <div className="p-2" style={{ fontSize: '14px' }}>
                                FireEye offers a single platform that blends innovative security technologies,
                                nation-state grade threat intelligence, and world-renowned Mandiant consulting.
                            </div>
                            <div className="p-2">
                                <a
                                    href="https://www.fireeye.com/company.html" target="_blank" rel="nofollow noreferrer"
                                    className="btn btn-primary rounded-0 px-4 py-3"
                                >
                                    Read More
                                </a>
                            </div>
                        </SponsorCardWrap>
                    </div>
                </div>
                <h3 className="my-4">Infrastructure Sponsors</h3>
                <div className="row mx-0">
                    <div className="col-md-6 col-12 p-2">
                        <SponsorCardWrap>
                            <div className="p-2 text-center">
                                <a href="https://cloud.google.com/" target="_blank" rel="nofollow noreferrer">
                                    <img
                                        alt="Google Cloud Platform" draggable="false"
                                        src={require('../images/sponsors/google_cloud.png')}
                                        style={{ maxHeight: '250px', maxWidth: '100%' }}
                                    />
                                </a>
                            </div>
                            <div className="p-2" style={{ fontSize: '14px' }}>
                                Meet your business challenges head on with cloud computing services from Google,
                                including data management, hybrid & multi-cloud, and AI & ML.
                            </div>
                            <div className="p-2">
                                <a
                                    href="https://cloud.google.com/" target="_blank" rel="nofollow noreferrer"
                                    className="btn btn-primary rounded-0 px-4 py-3"
                                >
                                    Read More
                                </a>
                            </div>
                        </SponsorCardWrap>
                    </div>
                </div>
            </div>
        </SponsorPage>
        <FooterArea />
    </Base>;

};

export default SponsorsPage;