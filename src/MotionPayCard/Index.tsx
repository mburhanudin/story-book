import { MouseEventHandler, useState } from "react";
import { IconGeneralView } from "../IconGeneralView";
import { IconMotionPay } from "../IconMotionPay"

export declare interface MotionPayCardProps {
    id: string,
    testId?: string,
    width?: string,
    height?: string,
    padding: string,
    isLogin: boolean,
    balance?: number,
    iconSize: string,
    onClickLogin?: MouseEventHandler<HTMLSpanElement>
}

export const MotionPayCard = (
    props: MotionPayCardProps
) => {
    const { id, testId, width, height, padding, isLogin, balance, iconSize, onClickLogin } = props;
    const [showBalance, setShowBalance] = useState<boolean>(false)

    const numberWithCommas = (value: number) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const onShowBalance = () => {
        setShowBalance(!showBalance)
    }

    return (
        <div id={id} data-testId={testId} className={`tw-bg-white tw-border tw-border-grey-300 tw-rounded-[7px] ${isLogin && 'tw-flex'}`} style={{ maxWidth: width, maxHeight: height, padding: padding }}>
            <div className="tw-flex tw-flex-col tw-justify-items-start tw-gap-1 tw-w-full tw-h-full">
                <IconMotionPay width={iconSize} />

                {isLogin ?
                    <div className="tw-flex tw-items-center tw-justify-between">
                        <div className="balance-detail tw-flex tw-item-start tw-justify-items-start tw-flex-col tw-w-[65%]">
                            <span className="font-['Satoshi-Regular'] tw-font-normal tw-text-xs tw-leading-[20px]">Saldo</span>
                            <p className="font-['Satoshi-Bold'] tw-font-bold tw-text-xs tw-leading-[20px]">Rp { showBalance && balance ? numberWithCommas(balance) : balance?.toString().replaceAll(/[0-9]/g, '*')}</p>
                        </div>
                        <div onClick={onShowBalance} className="tw-select-none tw-self-center">
                            <IconGeneralView fontSize="20px" />
                        </div>
                    </div>
                    :
                    <div className={`tw-flex tw-flex-col tw-justify-items-start ${width && width > '167px' && 'tw-w-[70%]'}`}>
                        <p className="font-['Satoshi-Regular'] tw-text-xs tw-leading-4">Akun motionpay belum terhubung <span onClick={onClickLogin} className="font-['Satoshi-Bold'] tw-font-bold tw-text-xs tw-text-cadmium-orange tw-cursor-pointer tw-select-none">Hubungkan</span></p>
                    </div>
                }
            </div>

        </div>
    )
}
