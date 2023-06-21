import React from 'react'
import { Vk30Icon } from '../assets/img/svg/vk30'
import { Telegram30Icon } from '../assets/img/svg/telegram30'
import { Discord30Icon } from '../assets/img/svg/discord30'

export function SocialIconMainMini() {
  return (
    <div className="Octagon-Social">
      <div>
        <div className="Social-Icon-Flex">
          <div>
            <a
              href="https://vk.com/octagonds"
              target={'_blank'}
              rel="noreferrer"
            >
              <Vk30Icon />
            </a>
          </div>
          <div>
            <a href="https://t.me/octagonds" target={'_blank'} rel="noreferrer">
              <Telegram30Icon />
            </a>
          </div>
          <div>
            <a
              href="https://discord.gg/z4ZQszRM9z"
              target={'_blank'}
              rel="noreferrer"
            >
              <Discord30Icon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
