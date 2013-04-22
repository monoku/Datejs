;(function(){
    var CultureInfo = {
        name:"es-CO",
        englishName:"Spanish (Colombia)",
        nativeName:"Español (Colombia)",
        dayNames:[
            "domingo",
            "lunes",
            "martes",
            "miércoles",
            "jueves",
            "viernes",
            "sábado"
        ],
        abbreviatedDayNames:[
            "dom",
            "lun",
            "mar",
            "mié",
            "jue",
            "vie",
            "sáb"
        ],
        shortestDayNames:["do",
            "lu",
            "ma",
            "mi",
            "ju",
            "vi",
            "sá"
        ],
        firstLetterDayNames:["d",
            "l",
            "m",
            "m",
            "j",
            "v",
            "s"
        ],
        monthNames:[
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre"],
        abbreviatedMonthNames:[
            "ene",
            "feb",
            "mar",
            "abr",
            "may",
            "jun",
            "jul",
            "ago",
            "sep",
            "oct",
            "nov",
            "dic"
        ],
        amDesignator:"a.m.",
        pmDesignator:"p.m.",
        firstDayOfWeek:0,
        twoDigitYearMax:2029,
        dateElementOrder:"dmy",
        formatPatterns:{
            shortDate:"dd/MM/yyyy",
            longDate:"dddd, dd' de 'MMMM' de 'yyyy",
            shortTime:"hh:mm tt",
            longTime:"hh:mm:ss tt",
            fullDateTime:"dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
            sortableDateTime:"yyyy-MM-ddTHH:mm:ss",
            universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",
            rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",
            monthDay:"dd MMMM",
            yearMonth:"MMMM' de 'yyyy"
        },
        regexPatterns:{
            jan:/^ene(ro)?/i,
            feb:/^feb(rero)?/i,
            mar:/^mar(zo)?/i,
            apr:/^abr(il)?/i,
            may:/^may(o)?/i,
            jun:/^jun(io)?/i,
            jul:/^jul(io)?/i,
            aug:/^ago(sto)?/i,
            sep:/^sep(tiembre)?/i,
            oct:/^oct(ubre)?/i,
            nov:/^nov(iembre)?/i,
            dec:/^dic(iembre)?/i,sun:/^do(m(ingo)?)?/i,
            mon:/^lu(n(es)?)?/i,
            tue:/^ma(r(tes)?)?/i,
            wed:/^mi(é(rcoles)?)?/i,
            thu:/^ju(e(ves)?)?/i,
            fri:/^vi(e(rnes)?)?/i,
            sat:/^sá(b(ado)?)?/i,
            future:/^próximo|sig(uiente)?|futuro/i,
            past:/^anterior|pasado|prev(io)?/i,
            add:/^(\+|después|desde|en)/i,
            subtract:/^(\-|antes|hace)/i,
            yesterday:/^ayer/i,
            today:/^hoy/i,
            tomorrow:/^mañana|manana/i,
            now:/^ahora|ya/i,
            millisecond:/^ms|mili(segundo)?s?/i,
            second:/^seg(undo)?s?/i,
            minute:/^min(uto)?s?/i,
            hour:/^h((o)?(rs)?|(oras)?)/i,
            week:/^sem(anas?)?/i,
            month:/^m(es|eses)?/i,
            day:/^d([ií]as?)?/i,
            year:/^a((ño)?s?)?/i,
            shortMeridian:/^(a|p)/i,
            longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,
            timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
            ordinalSuffix:/^\s*(st|nd|rd|th)/i,
            timeContext:/^\s*(\:|a|p)/i},
            abbreviatedTimeZoneStandard:{
                GMT:"-000",
                EST:"-0400",
                CST:"-0500",
                MST:"-0600",
                PST:"-0700"
            },
            abbreviatedTimeZoneDST:{
                GMT:"-000",
                EDT:"-0500",
                CDT:"-0600",
                MDT:"-0700",
                PDT:"-0800"
            }
        };

    if( 'defineProperty' in Object ){
        Object.defineProperty( Date, 'CultureInfo', {
            value: CultureInfo,
            configurable: true,
            enumerable: false,
            writeable: true
        } )
    }else{
        Date.CultureInfo = CultureInfo
    }
})();

/********************
 ** Future Strings **
 ********************
 * 
 * The following list of strings may not be currently being used, but 
 * may be incorporated into the Datejs library later. 
 *
 * We would appreciate any help translating the strings below.
 * 
 * If you modify this file, please post your revised CultureInfo file
 * to the Datejs Forum located at http://www.datejs.com/forums/.
 *
 * Please mark the subject of the post with [CultureInfo]. Example:
 *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)b
 *
 * English Name        Translated
 * ------------------  -----------------
 * about               about
 * ago                 ago
 * date                date
 * time                time
 * calendar            calendar
 * show                show
 * hourly              hourly
 * daily               daily
 * weekly              weekly
 * bi-weekly           bi-weekly
 * fortnight           fortnight
 * monthly             monthly
 * bi-monthly          bi-monthly
 * quarter             quarter
 * quarterly           quarterly
 * yearly              yearly
 * annual              annual
 * annually            annually
 * annum               annum
 * again               again
 * between             between
 * after               after
 * from now            from now
 * repeat              repeat
 * times               times
 * per                 per
 * min (abbrev minute) min
 * morning             morning
 * noon                noon
 * night               night
 * midnight            midnight
 * mid-night           mid-night
 * evening             evening
 * final               final
 * future              future
 * spring              spring
 * summer              summer
 * fall                fall
 * winter              winter
 * end of              end of
 * end                 end
 * long                long
 * short               short
 */