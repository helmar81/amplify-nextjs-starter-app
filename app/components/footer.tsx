import Image from 'next/image'
import styles from './page.module.css'
import {Button} from '@nextui-org/button';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'



<div className={styles.grid}>
<a
  href="https://docs.amplify.aws/gen2/"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Docs <span>-&gt;</span>
  </h2>
  <p>Review documentation for Amplify's code-first DX (Gen 2).</p>
</a>

<a
  href="https://docs.amplify.aws/gen2/start/quickstart/"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Quickstart <span>-&gt;</span>
  </h2>
  <p>Follow a tutorial to build a fullstack app with Amplify Gen 2.</p>
</a>

<a
  href="https://docs.amplify.aws/gen2/build-a-backend/auth/set-up-auth/"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Auth <span>-&gt;</span>
  </h2>
  <p>Zero-config Auth UI components with social sign-in and MFA.</p>
</a>

<a
  href="https://docs.amplify.aws/gen2/build-a-backend/data/set-up-data/"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Data <span>-&gt;</span>
  </h2>
  <p>
    Fully-typed real-time API with NoSQL database.
  </p>
</a>
</div>
