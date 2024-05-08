/* para el componente como tal en angular primero necesitamos
en el contructor colocar la configuracion del api
private primengConfig: PrimeNGConfig,
con su libreria 
import { PrimeNGConfig } from 'primeng/api';

luego en un ngoOnInit se debe colocar la configuracion */
constructor(
    private primengConfig: PrimeNGConfig, 
){}

ngOnInit() {
    this.primengConfig.setTranslation({
      dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
      ],
      monthNamesShort: [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic'
      ],
      today: 'Hoy',
      clear: 'Borrar'
    });
  }
