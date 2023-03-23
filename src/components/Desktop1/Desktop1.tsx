import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 103:14 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.logofav1}></div>
      <div className={classes.onePlaceSeveralUniverses}>One Place Several Universes</div>
      <div className={classes.theWeb3EcosystemHasBeenBuiltAr}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>The </span>
          <span className={classes.label2}>web3</span>
          <span className={classes.label3}>
            {' '}
            ecosystem has been built around Decentralized Finance. This new and powerful ecosystem is the carrier of a
            new conception of finance. Beyond finance, the &quot;
          </span>
          <span className={classes.label4}>web3</span>
          <span className={classes.label5}>
            &quot; as its name indicates, corresponds more broadly to a new conception of the Internet, notably through
            the notion of ownership and data sovereignty.{' '}
          </span>
        </p>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label6}>
              This new ecosystem is currently technical and forces builders to develop solutions that are both
              innovative and adaptable.{' '}
            </span>
            <span className={classes.label7}>Georgia</span>
            <span className={classes.label8}> supports this ambition by building around tools like </span>
            <span className={classes.label9}>Arweave</span>
            <span className={classes.label10}>, </span>
            <span className={classes.label11}>Bacalhau</span>
            <span className={classes.label12}> or </span>
            <span className={classes.label13}>Ethereum</span>
            <span className={classes.label14}>
              {' '}
              to deploy and build decentralised applications. But also to deploy distributed computing power.{' '}
            </span>
          </p>
        </div>
        <div className={classes.textBlock3}>
          <p></p>
        </div>
        <div className={classes.textBlock4}>
          However, the adoption of these technologies requires the deployment of powerful hardware. Hardware that
          responds to new data and digital asset protection issues. Hardware that represents the future by offering a
          new paradigm between classic screens and tools at the service of the metaverse.{' '}
        </div>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
        <div className={classes.textBlock6}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label15}>Georgia</span>
            <span className={classes.label16}> is an ecosystem for everyone. Let&#39;s build the future.</span>
          </p>
        </div>
      </div>
      <div className={classes.georgia2023}>Georgia - 2023</div>
      <div className={classes.tryOurBetaVersionsAndJoinTheWa}>
        Try our beta versions and join the waitlist for our products.{' '}
      </div>
      <div className={classes.rectangle412}></div>
      <div className={classes.rectangle413}></div>
      <div className={classes.rectangle414}></div>
      <div className={classes.compute}>
        <a href='https://georgia-compute.vercel.app/' target='_blank' rel='noreferrer' className={classes.textBlock7}>
          Compute
        </a>
      </div>
      <div className={classes.static}>
        <a href='https://georgiaserver.vercel.app/' target='_blank' rel='noreferrer' className={classes.textBlock8}>
          Static
        </a>
      </div>
      <div className={classes.hardware}>
        <a
          href='https://chilipepper.io/form/insane-yellowgreen-chili-affa4d56-18f7-4e2f-a1b1-23bbd821751f'
          target='_blank'
          rel='noreferrer'
          className={classes.textBlock9}
        >
          Hardware
        </a>
      </div>
      <div className={classes.line2}></div>
    </div>
  );
});
