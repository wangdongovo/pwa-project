<template>
  <div class="apps-container">
    <div class="top-section">
      <img class="bg-icon" src="@/assets/image/apps/google-play.png" alt="" />
    </div>

    <div class="main-section">
      <div class="app-wrapper">
        <img
          alt=""
          class="app-icon"
          data-value="app_icon"
          loading="lazy"
          src="https://static.roibest.com/oss_upload/202406/24/9ced830058c2c46ba5590604f7aec9c46678f16e4e6f0.png"
        />

        <div class="app-info">
          <div class="title">
            <span>Gamecoca</span>
            <img src="@/assets/image/apps/title-tag.png" alt="" srcset="" />
          </div>

          <p v-if="progressStatus" class="progress-tip">{{ progressNum }}%</p>
          <p v-else>Ghana Good Betting and Gaming Company</p>

          <div class="verified">
            <img src="@/assets/image/apps/verified.png" alt="" srcset="" />
            <span> Verified by Play Protect</span>
          </div>
        </div>
      </div>

      <div class="info-wrapper">
        <div class="info-item">
          <div class="value">
            <span>4.7</span>
            <img src="@/assets/image/apps/star.png" alt="" srcset="" />
          </div>
          <div class="label">91K reviews</div>
        </div>
        <div class="info-item">
          <div class="value">
            <span>11M +</span>
          </div>
          <div class="label">Downloads</div>
        </div>
        <div class="info-item">
          <div class="value">
            <img class="choice" src="@/assets/image/apps/choice.png" alt="" srcset="" />
          </div>
          <div class="label">Editors' Choice</div>
        </div>
      </div>

      <div v-if="currentStatus === 0" class="install-wrapper" @click="handleInstallClick">
        <div class="rapid">
          <img src="@/assets/image/apps/rapid.png" alt="" srcset="" />
          <span>Rapid Install</span>
        </div>
        <div class="countdown">
          Download within <span>{{ countdown }}</span
          >s
        </div>
      </div>

      <div v-else class="play-wrapper" @click="handleOpenAppClick">
        <div class="play">Play</div>
      </div>

      <div class="share-wrapper">
        <div class="share-item">
          <img src="@/assets/image/apps/image.png" alt="" srcset="" />
          <span>Share</span>
        </div>
        <div class="share-item">
          <img src="@/assets/image/apps/add-image.png" alt="" srcset="" />
          <span>Add to wishlist</span>
        </div>
      </div>

      <div class="swipe-wrapper">
        <div class="swipe-content">
          <div class="swipe-item">
            <img src="@/assets/image/apps/demo-image.png" alt="" srcset="" />
          </div>
          <div class="swipe-item">
            <img src="@/assets/image/apps/demo-image.png" alt="" srcset="" />
          </div>
          <div class="swipe-item">
            <img src="@/assets/image/apps/demo-image.png" alt="" srcset="" />
          </div>
          <div class="swipe-item">
            <img src="@/assets/image/apps/demo-image.png" alt="" srcset="" />
          </div>
          <div class="swipe-item">
            <img src="@/assets/image/apps/demo-image.png" alt="" srcset="" />
          </div>
          <div class="swipe-item">
            <img src="@/assets/image/apps/demo-image.png" alt="" srcset="" />
          </div>
        </div>
      </div>

      <div class="description-wrapper">
        <div class="title">About this app</div>

        <img class="arrow-icon" src="@/assets/image/apps/arrow.png" alt="" srcset="" />
        <div class="content">
          GAMECOCA Official Introduction <br /><br />

          Welcome to the world of GAMECOCA! Here, we provide you with the most exciting and
          thrilling gambling experience. GAMECOCA is not just a gaming platform, but a paradise of
          entertainment, allowing every player to enjoy top-notch gambling fun.

          <br /><br />Game Features<br /><br />
          Variety of Game Options: Our platform offers a rich variety of games, including slots,
          poker, roulette, blackjack, baccarat, and other classic gambling games. Whether you are a
          novice player or a seasoned gambler, you can find games that suit you here. Exquisite Game
          Interface: Every game on GAMECOCA is meticulously designed, with high-definition graphics
          and realistic sound effects, giving you an immersive experience. Our user-friendly game
          interface and simple operations allow you to easily get started and fully enjoy the fun of
          gaming. Fair and Just Gaming Environment: We are committed to providing players with a
          fair and just gaming environment. All games have undergone rigorous audits and
          certifications to ensure the randomness and fairness of the game results. Our platform
          uses the most advanced encryption technology to protect your personal information and
          funds.

          <br /><br />Quality Servicev<br /><br />
          24/7 Customer Support: No matter what time you encounter a problem, our customer support
          team is always ready to help you. You can contact our customer service via online chat,
          email, or phone, and we will quickly resolve your issues, allowing you to enjoy a
          worry-free gaming experience. Rich Rewards and Promotions: To thank every player for their
          support, we regularly launch various rewards and promotions. Whether it's newbie bonuses,
          deposit rebates, or special holiday events, you can receive generous rewards here. Our VIP
          program also offers exclusive benefits and privileges for loyal players. Convenient
          Payment Methods: We support multiple payment methods, including credit cards, e-wallets,
          bank transfers, etc. You can choose the most convenient payment method according to your
          needs. Our withdrawal process is simple and fast, allowing you to withdraw your winnings
          anytime and enjoy the joy of victory.

          <br /><br />Gaming Experience<br /><br />
          Live Streaming: To enhance the realism and interactivity of the games, we provide live
          streaming features. You can interact with real dealers in the live room and experience the
          authentic atmosphere of offline casinos. You can also communicate with other players in
          real-time, sharing gaming tips and strategies. Mobile Support: GAMECOCA can be enjoyed not
          only on the computer but also on mobile devices. Whether you are at home, in the office,
          or on the go, you can log into the platform anytime, anywhere, and enjoy gambling fun. Our
          mobile app is well-optimized, offering smooth operations for a seamless gaming experience.
          Multi-language Support: To serve global players, our platform offers multi-language
          support. You can choose the language that suits your habits, making it easy to play all
          the games.

          <br /><br />Responsible Gambling<br /><br />
          GAMECOCA always adheres to the concept of responsible gambling. We are committed to
          promoting a healthy gambling culture, encouraging players to entertain themselves
          rationally and avoid addiction. We provide a series of tools and resources to help players
          manage their time and spending on games. In summary, GAMECOCA is dedicated to providing
          every player with the best gambling experience. Whether you are seeking thrilling
          adventures or looking for entertainment and relaxation, GAMECOCA is your best choice. Join
          us and embark on an exciting gambling journey!
        </div>
      </div>

      <div class="description-wrapper">
        <div class="title">Updated on</div>

        <div class="content">July 6, 2024</div>

        <div class="label">
          <div class="label-item">Game1</div>
          <div class="label-item">Game2</div>
          <div class="label-item">Game3</div>
          <div class="label-item">Game4</div>
          <div class="label-item">Game5</div>
        </div>
      </div>

      <div class="description-wrapper">
        <div class="title">About this app</div>

        <img class="arrow-icon" src="@/assets/image/apps/arrow.png" alt="" srcset="" />

        <div class="content">
          Safety starts with understanding how developers collect and share your data. Data privacy
          and security practices may vary based on your use, region, and age. The developer provided
          this information and may update it over time.
        </div>

        <div class="safety">
          <div class="safety-item">
            <img class="icon" src="@/assets/image/apps/share-icon.png" alt="" srcset="" />
            <div class="content">
              <p>No data shared with third parties</p>

              <p><ins data-t="learn_more">Learn more</ins> about how developers declare sharing</p>
            </div>
          </div>
          <div class="safety-item">
            <img class="icon" src="@/assets/image/apps/cloud-icon.png" alt="" srcset="" />
            <div class="content">
              <p>This app may collect these data types Location, App activity and 2 others</p>
            </div>
          </div>

          <div class="safety-item">
            <img class="icon" src="@/assets/image/apps/lock-icon.png" alt="" srcset="" />
            <div class="content">
              <p>Data is encrypted in transit</p>
            </div>
          </div>

          <div class="safety-item">
            <img class="icon" src="@/assets/image/apps/delete-icon.png" alt="" srcset="" />
            <div class="content">
              <p>You can request that data be deleted</p>
            </div>
          </div>
        </div>
      </div>

      <div class="comments-wrapper">
        <div class="title">Ratings and reviews</div>
        <div class="tip">
          Ratings and reviews are verified and from people who use the same type of device that you
          use
        </div>

        <div class="type">
          <div class="type-item type-activated">Telephone</div>
          <div class="type-item">Tablet</div>
        </div>

        <div class="scoring">
          <div class="number">
            <div class="scoring-point">4.7</div>
            <div class="scoring-star">
              <img class="star-icon" src="@/assets/image/apps/star-icon-1.png" alt="" srcset="" />
              <img class="star-icon" src="@/assets/image/apps/star-icon-1.png" alt="" srcset="" />
              <img class="star-icon" src="@/assets/image/apps/star-icon-1.png" alt="" srcset="" />
              <img class="star-icon" src="@/assets/image/apps/star-icon-1.png" alt="" srcset="" />
              <img class="star-icon" src="@/assets/image/apps/star-icon-1.png" alt="" srcset="" />
            </div>
            <div class="scoring-people">999</div>
          </div>

          <div class="progress">
            <div class="progress-item">
              <span>5</span>
              <div class="progress-content">
                <div class="progress-bar" style="width: 60%"></div>
              </div>
            </div>
            <div class="progress-item">
              <span>4</span>
              <div class="progress-content">
                <div class="progress-bar" style="width: 50%"></div>
              </div>
            </div>
            <div class="progress-item">
              <span>3</span>
              <div class="progress-content">
                <div class="progress-bar" style="width: 30%"></div>
              </div>
            </div>
            <div class="progress-item">
              <span>2</span>
              <div class="progress-content">
                <div class="progress-bar" style="width: 60%"></div>
              </div>
            </div>
            <div class="progress-item">
              <span>1</span>
              <div class="progress-content">
                <div class="progress-bar" style="width: 60%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="comment-list">
          <div class="comment-item">
            <div class="header">
              <img class="avatar" src="@/assets/image/202407041445910.png" alt="" srcset="" />
              <span class="name">Json han</span>

              <img class="setting" src="@/assets/image/apps/setting-icon.png" alt="" srcset="" />
            </div>

            <div class="star">
              <img class="star-icon" src="@/assets/image/apps/star-icon-1.png" alt="" srcset="" />
              <img class="star-icon" src="@/assets/image/apps/star-icon-1.png" alt="" srcset="" />
              <img class="star-icon" src="@/assets/image/apps/star-icon-1.png" alt="" srcset="" />
              <img class="star-icon" src="@/assets/image/apps/star-icon-1.png" alt="" srcset="" />
              <img class="star-icon" src="@/assets/image/apps/star-icon-1.png" alt="" srcset="" />

              <span>July 1, 2024</span>
            </div>

            <div class="detail">
              GAMECOCA truly offers an exceptional gambling experience! The variety of games is
              impressive, catering to both novices and experienced players. The graphics and sound
              effects are top-notch, creating an immersive atmosphere. Customer support is always
              available and helpful, ensuring a smooth gaming experience. The frequent promotions
              and rewards add great value, making each visit exciting and rewarding. Highly
              recommend GAMECOCA for anyone looking for a reliable and thrilling online casino!
            </div>
          </div>
        </div>

        <div class="br"></div>
      </div>

      <div class="footer-wrapper">
        <div class="footer-section">
          <div class="footer-item">Play Pass</div>
          <div class="footer-item">Play Points</div>
          <div class="footer-item">Gift cards</div>
          <div class="footer-item">Redeem</div>
          <div class="footer-item">Refund Policy</div>
        </div>

        <div class="footer-section">
          <div class="footer-item-title">Children and family</div>
          <div class="footer-item">Family guide</div>
          <div class="footer-item">Family Sharing</div>
        </div>

        <div class="footer-section-bottom">
          <span>Service Terms</span>
          <span>Privacy</span>
        </div>

        <div class="footer-section-bottom">
          <span>Developers</span>
          <span>English</span>
        </div>
      </div>
    </div>

    <div class="menu-section">
      <div class="menu-item activated">
        <img src="@/assets/image/apps/menu-games-activated.png" alt="" srcset="" />
        <span>Games</span>
      </div>
      <div class="menu-item">
        <img src="@/assets/image/apps/menu-apps-default.png" alt="" srcset="" />
        <span>Apps</span>
      </div>
      <div class="menu-item">
        <img src="@/assets/image/apps/menu-tv-default.png" alt="" srcset="" />
        <span>Movies & TV</span>
      </div>
      <div class="menu-item">
        <img src="@/assets/image/apps/menu-books-default.png" alt="" srcset="" />
        <span>Books</span>
      </div>
      <div class="menu-item">
        <img src="@/assets/image/apps/menu-children-default.png" alt="" srcset="" />
        <span>Children</span>
      </div>
    </div>
  </div>



  <div class=""></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progressStatus = ref(false)
const progressNum = ref(0)

const countdown = ref(10)

const currentStatus = ref(0)

let timerId: any = null

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null)
const installedAppsCount = ref<number>(0)

const updateButtonVisibility = (count: number) => {
  installedAppsCount.value = count
}

const getInstalledApps = async () => {
  if ('getInstalledRelatedApps' in navigator) {
    try {
      const installedApps = await (navigator as any).getInstalledRelatedApps()

      console.log('本地安装的PWA', installedApps)

      installedApps.length > 0 ? (currentStatus.value = 1) : (currentStatus.value = 0)

      updateButtonVisibility(installedApps.length)
    } catch (error) {
      console.error('获取已安装应用时出错:', error)
      updateButtonVisibility(0)
    }
  } else {
    const isInstalled = localStorage.getItem('isInstalled') === 'true'
    updateButtonVisibility(isInstalled ? 1 : 0)
  }
}

const handleBeforeInstallPrompt = (event: Event) => {
  event.preventDefault()

  console.log('beforeinstallprompt事件出发')
  deferredPrompt.value = event as BeforeInstallPromptEvent
  localStorage.setItem('installPrompt', 'true')
  updateButtonVisibility(0)
}

const handleAppInstalled = () => {
  console.log('触发 appinstalled 事件，PWA 安装完成')
  localStorage.setItem('isInstalled', 'true')
  localStorage.removeItem('installPrompt')
  updateButtonVisibility(1)
}

const startCountdown = () => {
  let value = 0
  const intervalId = setInterval(() => {
    value++

    progressNum.value = value
    if (value >= 100) {
      clearInterval(intervalId)
    }
  }, 100)

  timerId = setInterval(() => {
    countdown.value--
    if (countdown.value === 0) {
      currentStatus.value = 1
      clearInterval(timerId)
    }
  }, 1000)
}

const handleInstallClick = async () => {
  if (deferredPrompt.value) {
    try {
      await deferredPrompt.value.prompt()
      const choiceResult = await deferredPrompt.value.userChoice
      if (choiceResult.outcome === 'accepted') {
        console.log('用户接受了安装')

        startCountdown()

        progressStatus.value = true
        localStorage.setItem('isInstalled', 'true')
        localStorage.removeItem('installPrompt')
        updateButtonVisibility(1)
      } else {
        console.log('用户取消了安装')
      }
    } catch (error) {
      console.error('执行安装提示时出错:', error)
    } finally {
      deferredPrompt.value = null
    }
  }
}

const handleOpenAppClick = () => {
  console.log('用户点击了打开应用按钮')
  if (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone
  ) {
    window.location.href = '/'
  } else {
    window.open(`${window.location.origin}/`, '_blank')
  }
}

const handleVisibilityChange = () => {
  if (document.hidden) {
    console.log('用户切换到了其他标签页或者最小化了窗口')
    // 在这里可以执行相应的操作，例如暂停计时器或动画等
  } else {
    console.log('用户回到了当前标签页')
    // 在这里可以恢复之前暂停的操作
  }
}

onMounted(() => {
  window.addEventListener('visibilitychange', handleVisibilityChange)
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  window.addEventListener('appinstalled', handleAppInstalled)

  getInstalledApps()
})

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  window.removeEventListener('appinstalled', handleAppInstalled)
})
</script>

<style scoped lang="less">
.apps-container {
  .top-section {
    height: 14.4vw;
    max-height: 108px;

    .bg-icon {
      background-color: #fff;
      left: 0;
      margin: 0 auto;
      max-width: 750px;
      object-fit: cover;
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 10;
    }
  }

  .main-section {
    overflow: hidden;
    padding: 54px 22px 108px 44px;
    width: 100%;

    .app-wrapper {
      display: flex;
      margin-bottom: 28px;

      .app-icon {
        height: 74px;
        width: 74px;
        margin-right: 22px;
        border-radius: 20%;
      }

      .app-info {
        line-height: 32px;
        overflow-wrap: anywhere;
        word-break: keep-all;
        .title {
          span {
            color: #111;
            font-size: 24px;
            font-weight: 500;
            letter-spacing: 0;
          }

          img {
            display: inline-block;
            height: 20px;
            vertical-align: baseline;
            width: 20px;
            margin-left: 3px;
          }
        }

        p {
          color: var(--theme-color);
          font-size: 16px;
          font-weight: 600;
          line-height: 23px;
          margin-bottom: 5px;
        }

        .progress-tip {
          color: #333;
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          margin-bottom: 3px;
        }

        .verified {
          display: flex;
          img {
            width: 10px;
            height: 11.76px;
            margin-right: 4px;
          }

          span {
            align-items: center;
            color: #333;
            display: flex;
            font-size: 10px;
            font-weight: 400;
            height: 14px;
          }
        }
      }
    }

    .info-wrapper {
      margin-bottom: 38px;
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      scrollbar-width: none;
      -ms-overflow-style: none;

      .info-item {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 100px;
        padding: 0 7px;
        position: relative;
        .value {
          align-items: center;
          color: #111;
          display: flex;
          font-size: 14px;
          font-weight: 600;
          line-height: 18px;
          margin-bottom: 6px;
          span {
          }
          img {
            width: 10px;
            height: 10px;
            margin-left: 2px;
          }

          .choice {
            height: 18px;
            margin-bottom: 6px;
            width: 18px;
            margin-left: 0px;
          }
        }

        .label {
          color: #606569;
          font-size: 12px;
          font-weight: 400;
          line-height: 17px;
        }
      }

      .info-item::before {
        background: #ebebeb;
        bottom: 0;
        content: '';
        height: 24px;
        margin: auto 0;
        position: absolute;
        top: 0;
        width: 1px;
        left: 0;
      }
      .info-item:first-child::before {
        display: none;
      }
    }

    .install-wrapper {
      margin-bottom: 28px;
      overflow: hidden;
      position: relative;
      width: 100%;

      display: flex;
      align-items: center;

      flex-direction: column;
      height: auto;
      padding: 8px;
      background: var(--theme-color);
      justify-content: center;
      border-radius: 8px;
      overflow: hidden;

      .rapid {
        align-items: center;
        color: var(--install-text-color);
        display: flex;
        font-size: 15px;
        font-weight: 500;
        justify-content: center;
        line-height: 21px;

        img {
          display: block;
          width: 12px;
          height: 18px;
          margin-right: 4px;
        }

        span {
          margin-left: 4px;
        }
      }

      .countdown {
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;

        span {
          margin: 0px 3px;
        }
      }
    }

    .play-wrapper {
      margin-bottom: 28px;
      overflow: hidden;
      position: relative;
      width: 100%;
      display: flex;
      background: var(--theme-color);
      justify-content: center;
      align-items: center;
      border-radius: 8px;

      font-size: 14px;
      font-weight: 600;
      height: 48px;
      overflow: hidden;
      padding: 0 12px;
      position: relative;
      width: 100%;
      z-index: 1;

      .play {
        color: #fff;
      }
    }

    .share-wrapper {
      display: flex;
      align-content: center;
      justify-content: center;
      margin-bottom: 28px;
      .share-item {
        margin: 12px;
        max-width: 220px;
        align-items: center;
        display: flex;
        justify-content: center;

        img {
          flex: 0 0 17px;
          height: 20px;
          width: 17px;
          margin-right: 10px;
        }
      }
    }

    .swipe-wrapper {
      margin-bottom: 24px;
      overflow-x: auto;
      overflow-y: hidden;
      width: 100%;

      scrollbar-width: none;
      -ms-overflow-style: none;

      .swipe-content {
        display: flex;
        flex-wrap: nowrap;
        height: 224px;
        width: -moz-max-content;
        width: max-content;

        .swipe-item {
          margin-right: 11px;
          border-radius: 8px;
          height: 224px;
          overflow: hidden;

          img {
            display: block;
            height: 100%;
            width: auto;
          }
        }
      }
    }

    .swipe-wrapper::-webkit-scrollbar {
      display: none;
    }

    .description-wrapper {
      position: relative;
      .title {
        color: #202124;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        margin-bottom: 24px;
      }

      .arrow-icon {
        height: 15px;
        position: absolute;
        top: 4px;
        width: 15px;
        right: 0;
      }

      .content {
        color: #666;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 19px;
        margin-bottom: 30px;
        overflow-wrap: break-word;
        white-space: break-spaces;
      }

      .label {
        display: flex;
        flex-flow: wrap;
        margin-bottom: 15px;
        .label-item {
          margin: 0 11px 16px 0;
          align-items: center;
          background: #fff;
          border: 1px solid #dadce0;
          border-radius: 15px;
          color: #5f6368;
          display: flex;
          font-size: 14px;
          font-weight: 400;
          height: 30px;
          justify-content: center;
          padding: 0 12px;
          width: -moz-fit-content;
          width: fit-content;
        }
      }

      .safety {
        border: 1px solid #dadce0;
        border-radius: 7px;
        padding: 24px 26px 8px;
        width: 100%;

        .safety-item {
          display: flex;

          img {
            align-items: center;
            display: flex;
            height: 20px;
            justify-content: center;
            width: 20px;
            margin-right: 16px;
          }

          .content {
            margin-bottom: 16px;
            p {
              color: #444;
              font-size: 14px;
              font-weight: 400;
              line-height: 23px;
            }
          }
        }
      }
    }

    .comments-wrapper {
      margin-top: 34px;
      .title {
        color: #222;
        font-size: 19px;
        font-weight: 500;
      }

      .tip {
        color: #444;
        font-size: 13px;
        margin: 20px 0 10px;
      }

      .type {
        display: flex;
        flex-flow: wrap;
        margin: 40px 0 20px;
        .type-item {
          margin: 0 10px 10px 0;
          align-items: center;
          border: 1px solid #dadce0;
          border-radius: 15.5px;
          color: #5f6368;
          display: flex;
          font-size: 13px;
          height: 31px;
          justify-content: center;
          padding: 0 15px;
          width: -moz-fit-content;
          width: fit-content;
        }

        .type-activated {
          background-color: #e6f3ef;
          border: 1px solid #e6f3ef;
          color: #028760;
        }
      }

      .scoring {
        display: flex;
        justify-content: space-between;
        .number {
          .scoring-point {
            font-size: 58px;
            font-weight: 400;
          }

          .scoring-star {
            display: flex;
            align-content: center;
            .star-icon {
              width: 14px;
              height: 14px;
              margin-right: 2px;
            }
          }

          .scoring-people {
            color: #444;
            font-size: 12px;
            margin-top: 13px;
          }
        }

        .progress {
          flex: 1;
          max-width: 180px;
          .progress-item {
            align-items: center;
            color: #444;
            display: flex;
            font-size: 11px;
            margin-bottom: 6.5px;
            span {
            }

            .progress-content {
              background-color: #e3e3e3;
              border-radius: 5px;
              flex: 1;
              height: 9px;
              max-width: 166px;
              overflow: hidden;
              width: 100%;
              margin-left: 14.5px;

              .progress-bar {
                background: var(--theme-color);
                border-radius: 5px;
                height: 100%;
              }
            }
          }
        }
      }

      .comment-list {
        .comment-item {
          margin: 30px 0;
          .header {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin-bottom: 28px;
            .avatar {
              border-radius: 50%;
              height: 32px;
              object-fit: fill;
              width: 32px;
              margin-right: 16px;
            }

            .name {
              margin-right: auto;
              color: #222;
              font-size: 14.5px;
            }

            .setting {
              height: 16px;
              width: 4px;
            }
          }

          .star {
            display: flex;
            align-items: center;
            .star-icon {
              width: 11px;
              height: 11px;
              margin-right: 2px;
            }

            span {
              color: #444;
              font-size: 12px;
              margin-left: 8px;
            }
          }

          .detail {
            color: #444;
            font-size: 14px;
            margin-top: 10px;
            overflow-wrap: break-word;
            white-space: break-spaces;
          }
        }
      }

      .br {
        background-color: #dadce0;
        height: 0.5px;
        margin: 40px 0 10px;
        width: 100%;
      }
    }

    .footer-wrapper {
      .footer-section {
        padding-top: 15px;

        .footer-item {
          color: #606468;
          font-size: 14px;
          padding-top: 14px;
        }
        .footer-item-title {
          color: #5f6368;
          font-size: 14px;
          font-weight: 500;
          padding-top: 14px;
        }
      }

      .footer-section-bottom {
        display: flex;
        align-items: center;
        color: #606468;
        font-size: 13px;
        margin-top: 53px;

        span {
          margin-right: 22px;
        }
      }
    }
  }

  .menu-section {
    height: 54px;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #dadce0;
    bottom: 0;
    display: flex;
    left: 0;
    margin: 0 auto;
    max-width: 750px;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 10;

    .menu-item {
      align-items: center;
      display: flex;
      flex: 1;
      flex-direction: column;
      height: 54px;
      justify-content: center;

      img {
        display: block;
        height: 24px;
        width: 24px;
      }

      span {
        color: #5f6368;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.1;
        margin-top: 2px;
      }
    }

    .activated {
      span {
        color: #028760;
      }
    }
  }
}
</style>
