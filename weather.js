var app = new Vue({
    el:"#app",
    data: {
        city: "",
        weatherList:[],
        ganmao:""
    },
    methods: {
        searchWeather:function() {
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
                .then(function(response) {
                    that.weatherList = response.data.data.forecast;
                    that.ganmao = response.data.data.ganmao;
                });
            document.querySelector("#coldReminder").style.display="block";
        },
        changeCity:function (cityName) {
            this.city = cityName;
            this.searchWeather();
        }
    }
})