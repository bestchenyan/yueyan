import { Vue, Component, Model, Prop, Watch } from "vue-property-decorator";
import "./index.scss";
@Component({
    template: require("./index.html"),
})
export default class CountDown extends Vue {
    @Model("change", { default: false })
    visible!: boolean;

    @Prop({ default: 0 })
    time!: number | string;
    @Prop({ default: 0 })
    refreshCounter!: number | string;
    @Prop({ default: 0 })
    end!: number | string;
    @Prop({ default: false })
    isMiniSecond!: boolean;

    days: number | string = "0";
    hours: number | string = "00";
    mins: number | string = "00";
    seconds: number | string = "00";
    timer: any = null;
    curTime = 0;

    get duration() {
        if (this.end) {
            let end = String(this.end).length >= 13 ? +this.end : +this.end * 1000;
            end -= Date.now();
            return end;
        }
        const time = this.isMiniSecond ? Math.round(+this.time / 1000) : Math.round(+this.time);
        return time;
    }

    @Watch("duration")
    onDurationChange() {
        this.countDown();
    }

    @Watch("refreshCounter")
    onRefreshCounterChange() {
        this.countDown();
    }

    mounted() {
        this.countDown();
        this.listenerDoodleClick();
    }

    durationFormatter(time: number) {
        if (!time) return { ss: 0 };
        let t = +time.toString().slice(0, -3);
        const ss = t % 60;
        t = (t - ss) / 60;
        if (t < 1) return { ss };
        const mm = t % 60;
        t = (t - mm) / 60;
        if (t < 1) return { mm, ss };
        const hh = t % 24;
        t = (t - hh) / 24;
        if (t < 1) return { hh, mm, ss };
        const dd = t;
        return { dd, hh, mm, ss };
    }
    countDown() {
        this.curTime = Date.now();
        this.getTime(this.duration);
    }
    getTime(time: number) {
        this.timer && clearTimeout(this.timer);
        if (time < 0) {
            this.$emit("handle-time-end");
            return;
        }
        const { dd, hh, mm, ss } = this.durationFormatter(time);
        this.days = dd || 0;
        // this.hours = `00${hh || ''}`.slice(-2);
        // this.mins = `00${mm || ''}`.slice(-2);
        // this.seconds = `00${ss || ''}`.slice(-2);
        this.hours = hh || 0;
        this.mins = mm || 0;
        this.seconds = ss || 0;
        this.timer = setTimeout(() => {
            const now = Date.now();
            const diffTime = Math.floor(now - this.curTime);
            const step = diffTime > 1 ? diffTime : 1; // 页面退到后台的时候不会计时，对比时间差，大于1s的重置倒计时
            this.curTime = now;
            this.getTime(time - step);
        }, 1000);
    }

    listenerDoodleClick() {
        const doodle: any = document.querySelector("css-doodle");
        setInterval(() => {
            doodle.update();
        }, 5000);
        document.addEventListener("click", function (e) {
            doodle.update();
        });
    }
}
