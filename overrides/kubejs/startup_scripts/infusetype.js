const $InfuseTypeDeferredRegister = Java.loadClass("mekanism.common.registration.impl.InfuseTypeDeferredRegister")
const INFUSETYPE = new $InfuseTypeDeferredRegister("kubejs")

//注册气体 (id, 颜色)
INFUSETYPE.register("flux_gas", 0x8255e5)
//所属模组
INFUSETYPE.register(Java.loadClass("dev.architectury.platform.forge.EventBuses").getModEventBus("kubejs").get())