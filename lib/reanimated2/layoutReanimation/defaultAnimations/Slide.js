import { Dimensions } from 'react-native';
import { ComplexAnimationBuilder } from '../animationBuilder';
const { width, height } = Dimensions.get('window');
export class SlideInRight extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        originX: delayFunction(delay, animation(values.originX, config)),
                    },
                    initialValues: {
                        originX: values.originX + width,
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideInRight();
    }
}
export class SlideInLeft extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        originX: delayFunction(delay, animation(values.originX, config)),
                    },
                    initialValues: {
                        originX: values.originX - width,
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideInLeft();
    }
}
export class SlideOutRight extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        originX: delayFunction(delay, animation(Math.max(values.originX + width, width), config)),
                    },
                    initialValues: {
                        originX: values.originX,
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideOutRight();
    }
}
export class SlideOutLeft extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        originX: delayFunction(delay, animation(Math.min(values.originX - width, -width), config)),
                    },
                    initialValues: {
                        originX: values.originX,
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideOutLeft();
    }
}
export class SlideInUp extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        originY: delayFunction(delay, animation(values.originY, config)),
                    },
                    initialValues: {
                        originY: -height,
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideInUp();
    }
}
export class SlideInDown extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        originY: delayFunction(delay, animation(values.originY, config)),
                    },
                    initialValues: {
                        originY: values.originY + height,
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideInDown();
    }
}
export class SlideOutUp extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        originY: delayFunction(delay, animation(Math.min(values.originY - height, -height), config)),
                    },
                    initialValues: { originY: values.originY },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideOutUp();
    }
}
export class SlideOutDown extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        originY: delayFunction(delay, animation(Math.max(values.originY + height, height), config)),
                    },
                    initialValues: { originY: values.originY },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideOutDown();
    }
}
