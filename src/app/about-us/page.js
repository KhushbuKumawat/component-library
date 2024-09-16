// app/page.js
"use client"
import Image from 'next/image';
import CodePreviewTabs from '../../components/CodePreviewTabs';

export default function Page() {
  const codeExample = `
    <div>
      <h1>Hello, World!</h1>
      <p>This is a preview of the code.</p>
    </div>
  `;

  const previewExample = (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a preview of the code.</p>
    </div>
  );

  return (
    <div className="container">
      <div class="sc-gsDKAQ fuorEK"><div style={{animationDuration: "307.2s"}} direction="rtl" class="sc-dkPtRN ehURSa">
      <div class="sc-bdvvtL iLRIyv" style={{left: "1228px", top: "200px"}}><div class="sc-hKwDye idaydu">
      <div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg TlUHB" style="animation-duration: 17.5929s;">
      <div direction="counterclockwise" class="sc-gKclnd dEdRwb" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/apple-black.svg" height={100} width={100} alt=""/>
      </div></div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 874px; top: 110px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg iXrrMX" style="animation-duration: 17.5929s;">
      <div direction="counterclockwise" class="sc-gKclnd eNmwje" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/auth0.svg" alt="" height={100} width={100}/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 439px; top: 262px;"><div class="sc-hKwDye idaydu">
      <div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg iEoulh" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd dJPTit" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/aws-cognito.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 933px; top: 151px;"><div class="sc-hKwDye idaydu">
      <div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg eXZjsv" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd dMHEvE" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/battle.net.svg" alt=""/></div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 465px; top: 331px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg gdTtgN" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd bNwWaZ" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/box.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 1078px; top: 48px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg iUxkat" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd dgxPNm" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/facebook-2.svg" alt=""/></div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 1270px; top: 273px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg Tzbez" style="animation-duration: 17.5929s;">
      <div direction="counterclockwise" class="sc-gKclnd kKwibW" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/github-1.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 646px; top: 221px;">
      <div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg ekJoli" style="animation-duration: 17.5929s;">
      <div direction="counterclockwise" class="sc-gKclnd iwhVeV" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/gitlab.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 1407px; top: 61px;"><div class="sc-hKwDye idaydu">
      <div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg dxyjQU" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd fiznSc" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/google-icon.svg" alt=""/>
      </div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 113px; top: 341px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg jONVYR" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd eHHMgC" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/okta-3.svg" alt=""/></div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 1388px; top: 276px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg fZsxjy" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd fEdvuE" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/openid.svg" alt=""/></div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 903px; top: 306px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg bcUYCF" style="animation-duration: 17.5929s;">
      <div direction="counterclockwise" class="sc-gKclnd cUrNDI" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/slack.svg" alt=""/></div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 340px; top: 392px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg ciMCXR" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd kptEKf" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/spotify.svg" alt=""/></div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 417px; top: 191px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg jlZYai" style="animation-duration: 17.5929s;"><div direction="clockwise" class="sc-gKclnd hcCviZ" style="animation-duration: 17.5929s;">
        <div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/twitter.svg" alt=""/></div></div></div></div></div></div></div></div><div style="animation-duration: 307.2s;" direction="rtl" class="sc-dkPtRN ehURSa">
          <div class="sc-bdvvtL iLRIyv" style="left: 1228px; top: 200px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg TlUHB" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd dEdRwb" style="animation-duration: 17.5929s;">
            <div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/apple-black.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 874px; top: 110px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh">
              <div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg iXrrMX" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd eNmwje" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
                <Image class="logo_Gd1j" src="/img/providers/auth0.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 439px; top: 262px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg iEoulh" style="animation-duration: 17.5929s;">
                  <div direction="clockwise" class="sc-gKclnd dJPTit" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;">
      <div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/aws-cognito.svg" alt=""/>
      </div>
      </div>
      <div class="sc-bdvvtL iLRIyv" style="left: 933px; top: 151px;">
      <div class="sc-hKwDye idaydu">
      <div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg eXZjsv" style="animation-duration: 17.5929s;">
      <div direction="counterclockwise" class="sc-gKclnd dMHEvE" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;">
      <div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/battle.net.svg" alt=""/>
      </div></div></div></div></div></div>
      </div>
      <div class="sc-bdvvtL iLRIyv" style="left: 465px; top: 331px;">
      <div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg gdTtgN" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd bNwWaZ" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;">
      <div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/box.svg" alt=""/>
      </div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 1078px; top: 48px;">
      <div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg iUxkat" style="animation-duration: 17.5929s;">
      <div direction="counterclockwise" class="sc-gKclnd dgxPNm" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;">
      <div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/facebook-2.svg" alt=""/>
      </div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 1270px; top: 273px;">
      <div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg Tzbez" style="animation-duration: 17.5929s;">
      <div direction="counterclockwise" class="sc-gKclnd kKwibW" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/github-1.svg" alt=""/>
      </div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 646px; top: 221px;">
      <div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg ekJoli" style="animation-duration: 17.5929s;">
      <div direction="counterclockwise" class="sc-gKclnd iwhVeV" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/gitlab.svg" alt=""/>
      </div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 1407px; top: 61px;"><div class="sc-hKwDye idaydu">
      <div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg dxyjQU" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd fiznSc" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;">
      <div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/google-icon.svg" alt=""/>
      </div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 113px; top: 341px;">
      <div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg jONVYR" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd eHHMgC" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/okta-3.svg" alt=""/>
      </div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 1388px; top: 276px;">
      <div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg fZsxjy" style="animation-duration: 17.5929s;"><div direction="clockwise" class="sc-gKclnd fEdvuE" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/openid.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 903px; top: 306px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg bcUYCF" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd cUrNDI" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/slack.svg" alt=""/></div></div></div></div></div></div>
      </div><div class="sc-bdvvtL iLRIyv" style="left: 340px; top: 392px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg ciMCXR" style="animation-duration: 17.5929s;"><div direction="clockwise" class="sc-gKclnd kptEKf" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/spotify.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 417px; top: 191px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg jlZYai" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd hcCviZ" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/twitter.svg" alt=""/></div></div></div></div></div></div></div></div><div style="animation-duration: 307.2s;" direction="rtl" class="sc-dkPtRN ehURSa"><div class="sc-bdvvtL iLRIyv" style="left: 1228px; top: 200px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg TlUHB" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd dEdRwb" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/apple-black.svg" alt=""/>
      </div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 874px; top: 110px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg iXrrMX" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd eNmwje" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/auth0.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 439px; top: 262px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg iEoulh" style="animation-duration: 17.5929s;"><div direction="clockwise" class="sc-gKclnd dJPTit" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/aws-cognito.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 933px; top: 151px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg eXZjsv" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd dMHEvE" style="animation-duration: 17.5929s;">
      <div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/battle.net.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 465px; top: 331px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg gdTtgN" style="animation-duration: 17.5929s;"><div direction="clockwise" class="sc-gKclnd bNwWaZ" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/box.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 1078px; top: 48px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg iUxkat" style="animation-duration: 17.5929s;">
      <div direction="counterclockwise" class="sc-gKclnd dgxPNm" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/facebook-2.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 1270px; top: 273px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg Tzbez" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd kKwibW" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/github-1.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 646px; top: 221px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh">
      <div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg ekJoli" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd iwhVeV" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;">
      <div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/gitlab.svg" alt=""/>
      </div></div></div></div></div></div></div>
      <div class="sc-bdvvtL iLRIyv" style="left: 1407px; top: 61px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg dxyjQU" style="animation-duration: 17.5929s;">
      <div direction="clockwise" class="sc-gKclnd fiznSc" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/google-icon.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 113px; top: 341px;">
      <div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg jONVYR" style="animation-duration: 17.5929s;"><div direction="clockwise" class="sc-gKclnd eHHMgC" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/okta-3.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 1388px; top: 276px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg fZsxjy" style="animation-duration: 17.5929s;"><div direction="clockwise" class="sc-gKclnd fEdvuE" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/openid.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 903px; top: 306px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="counterclockwise" class="sc-jRQBWg bcUYCF" style="animation-duration: 17.5929s;"><div direction="counterclockwise" class="sc-gKclnd cUrNDI" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/slack.svg" height={100} width={100} alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 340px; top: 392px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg ciMCXR" style="animation-duration: 17.5929s;"><div direction="clockwise" class="sc-gKclnd kptEKf" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;">
      <Image class="logo_Gd1j" src="/img/providers/spotify.svg" alt=""/></div></div></div></div></div></div></div><div class="sc-bdvvtL iLRIyv" style="left: 417px; top: 191px;"><div class="sc-hKwDye idaydu"><div width="30" height="30" class="sc-eCImPb gtCkUh"><div width="39.59797974644666" direction="clockwise" class="sc-jRQBWg jlZYai" style="animation-duration: 17.5929s;"><div direction="clockwise" class="sc-gKclnd hcCviZ" style="animation-duration: 17.5929s;"><div class="company_xRth" style="height: 30px; width: 30px;"><div class="circle_yz5d" style="height: 60px; width: 60px;"><Image class="logo_Gd1j" src="/img/providers/twitter.svg" alt="" height={100} width={100}/>
      </div></div></div></div></div></div></div></div></div></div>
    </div>
    </div>
    </div>
    </div>
  );
}
