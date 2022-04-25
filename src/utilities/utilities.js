import './services/service-adapter';
import DomHelpers from './modules/dom-helpers';
import HelperFunctions from './modules/helper-functions';

class utilities {
    constructor() {
        global.util = this;

        this.dom = new DomHelpers();
        this.func = new HelperFunctions();
    }

    async getService(item) {
        const result = await import(`./services/${item}`);

        return result.default;
    }

    async callService(serviceName, ...params) {
        const service = await this.getService(serviceName);
        let result;

        try {
            result = await service(...params);
        } catch (err) {
            console.log('service error');
        }

        return result;
    }

    async getModule(module) {
        const result = await import(`./modules/${module}`);

        return result.default || result;
    }
}

new utilities();
