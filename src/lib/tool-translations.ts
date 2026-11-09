import { ToolData } from './tools-data';
import { Language } from './i18n';

// Comprehensive dictionary for translating tool names, taglines, steps, features, audience, usecases, formats, and FAQs
interface LocalizedToolOverride {
  name?: string;
  tagline?: string;
  buttonText?: string;
  inputPlaceholder?: string;
  steps?: Array<{ title: string; desc: string }>;
  features?: Array<{ title: string; desc: string }>;
  audience?: Array<{ label: string; desc: string }>;
  useCases?: Array<{ title: string; desc: string }>;
  formats?: Array<{ label: string; desc: string }>;
  faqs?: Array<{ q: string; a: string }>;
  seoHeadline?: string;
  seoBody?: string;
}

const TOOL_LOCALIZATIONS: Partial<Record<Language, Record<string, LocalizedToolOverride>>> = {
  ur: {
    'youtube-video-downloader': {
      name: 'یوٹیوب ویڈیو ڈاؤنلوڈر',
      tagline: 'کوئی بھی یوٹیوب ویڈیو 4K، 1080p فل ایچ ڈی، یا معیاری کوالٹی میں ڈاؤن لوڈ کریں۔ تیز رفتار، مفت اور بغیر کسی سافٹ ویئر کے۔',
      buttonText: 'ڈاؤن لوڈ کریں',
      inputPlaceholder: 'یوٹیوب ویڈیو کا لنک یہاں پیسٹ کریں...',
      steps: [
        { title: 'لنک پیسٹ کریں', desc: 'براؤزر یا ایپ سے یوٹیوب ویڈیو کا لنک کاپی کریں اور اوپر باکس میں پیسٹ کریں۔' },
        { title: 'کوالٹی منتخب کریں', desc: 'ڈاؤن لوڈ کے بٹن پر کلک کریں اور ہمارا سسٹم تمام دستیاب فارمیٹس نکالے گا۔' },
        { title: 'ڈیوائس میں محفوظ کریں', desc: 'اپنی پسندیدہ ریزولوشن (4K, 1080p, 720p, MP4) منتخب کریں اور فائل فوراً محفوظ کریں۔' },
      ],
      features: [
        { title: 'حقیقی 4K اور 1080p ریزولوشن', desc: 'اصل ساؤنڈ اور ویژول کوالٹی کے ساتھ مکمل ریزولوشن میں ویڈیوز حاصل کریں۔' },
        { title: 'براہ راست اسٹریمنگ', desc: 'سرور پر کوئی فائل محفوظ نہیں ہوتی، فائل براہ راست آپ کے براؤزر میں ڈاؤن لوڈ ہوتی ہے۔' },
        { title: 'کوئی واٹر مارک نہیں', desc: 'ڈاؤن لوڈ کردہ ویڈیو میں کوئی اضافی لوگو یا واٹر مارک شامل نہیں ہوتا۔' },
        { title: 'تیز ترین ڈاؤن لوڈ رفتار', desc: 'گوگل کے تیز ترین نیٹ ورک سے براہ راست تیز رفتار ڈاؤن لوڈ۔' },
        { title: 'تمام ڈیوائسز پر سپورٹ', desc: 'آئی فون، اینڈرائیڈ، ونڈوز اور میک پر بغیر کسی پریشانی کے چلتا ہے۔' },
        { title: '100% مفت اور لامحدود', desc: 'بغیر کسی حد کے جتنی چاہیں ویڈیوز ڈاؤن لوڈ کریں۔' },
      ],
      audience: [
        { label: 'ویڈیو ایڈیٹرز', desc: 'ایڈیٹنگ اور کلپس کے لیے ہائی ریزولوشن ویڈیوز حاصل کریں۔' },
        { label: 'یوٹیوب کری ایٹرز', desc: 'اپنے چینل کا بیک اپ رکھیں اور مواد کا تجزیہ کریں۔' },
        { label: 'طلباء اور اساتذہ', desc: 'تعلیمی لیکچرز اور ٹیوٹوریلز کو آف لائن دیکھنے کے لیے محفوظ کریں۔' },
        { label: 'عام صارفین', desc: 'سفر کے دوران بغیر انٹرنیٹ کے دیکھنے کے لیے پسندیدہ ویڈیوز ڈاؤن لوڈ کریں۔' },
      ],
      useCases: [
        { title: 'آف لائن دیکھنا', desc: 'انٹرنیٹ کے بغیر سفر یا فلائٹ کے دوران ویڈیوز کا لطف اٹھائیں۔' },
        { title: 'یوٹیوب کلپس بنانا', desc: 'پوڈکاسٹ اور انٹرویوز سے ہائی لائٹس کاٹ کر شیئر کریں۔' },
        { title: 'آرکائیو اور بیک اپ', desc: 'اپنی اپلوڈ کردہ ویڈیوز کو محفوظ مقام پر محفوظ رکھیں۔' },
        { title: 'تعلیمی نوٹس', desc: 'مکمل لیکچرز اور پریزنٹیشنز کو بغیر بفرنگ کے محفوظ کریں۔' },
      ],
      formats: [
        { label: '4K الٹرا ایچ ڈی (2160p)', desc: 'بڑی اسکرینوں کے لیے اعلی ترین ویڈیو ریزولوشن۔' },
        { label: '1080p فل ایچ ڈی (60fps)', desc: 'پیشہ ورانہ ایڈیٹنگ اور بہترین وڈیو کوالٹی۔' },
        { label: '720p ایچ ڈی', desc: 'موبائل کے لیے ہلکی اور تیز ڈاؤن لوڈ فائل۔' },
        { label: 'MP4 وڈیو فارمیٹ', desc: 'ہر پلیئر اور ڈیوائس کے ساتھ مطابقت رکھنے والا فارمیٹ۔' },
        { label: 'WebM ہائی ڈینسٹی', desc: 'جدید براؤزرز کے لیے جدید ترین ویڈیو کوڈیک۔' },
        { label: 'سٹریمنگ آڈیو', desc: 'مکمل ویڈیو کے ساتھ شفاف اور کرسٹل کلیئر ساؤنڈ۔' },
      ],
      faqs: [
        { q: 'کیا یہ ویڈیو ڈاؤنلوڈر مفت ہے؟', a: 'جی ہاں، یہ سروس 100% مفت ہے اور اس کے لیے کسی اکاؤنٹ یا فیس کی ضرورت نہیں ہے۔' },
        { q: 'کیا ویڈیوز سرور پر محفوظ ہوتی ہیں؟', a: 'نہیں! ویڈیوز کسی بھی سرور یا ڈسک پر محفوظ نہیں ہوتیں، بلکہ براہ راست آپ کی ڈیوائس میں اسٹریم ہوتی ہیں۔' },
        { q: 'کیا میں موبائل پر ویڈیوز ڈاؤن لوڈ کر سکتا ہوں؟', a: 'جی ہاں، یہ آئی فون (سفاری) اور اینڈرائیڈ (کروم) دونوں پر بہترین کام کرتا ہے۔' },
        { q: 'کیا ڈاؤن لوڈ کی کوئی حد ہے؟', a: 'کوئی حد نہیں ہے۔ آپ روزانہ جتنی چاہیں ویڈیوز ڈاؤن لوڈ کر سکتے ہیں۔' },
        { q: 'کیا آڈیو بھی ساتھ ڈاؤن لوڈ ہوتی ہے؟', a: 'جی ہاں، تمام MP4 فارمیٹس میں اعلیٰ معیار کی اصل آڈیو شامل ہوتی ہے۔' },
      ],
      seoHeadline: 'آن لائن یوٹیوب ویڈیو ڈاؤنلوڈر - 4K اور 1080p میں مفت ڈاؤن لوڈ کریں',
      seoBody: 'YT1s یوٹیوب ویڈیو ڈاؤنلوڈر آپ کو یوٹیوب سے کسی بھی ویڈیو کو 4K، 1080p اور 720p میں بغیر کسی رکاوٹ کے ڈاؤن لوڈ کرنے کی سہولت فراہم کرتا ہے۔ ہماری تیز رفتار سروس بغیر کسی اشتہار اور بغیر اکاؤنٹ کے براہ راست ڈاؤن لوڈ فراہم کرتی ہے۔'
    },

    'youtube-shorts-downloader': {
      name: 'یوٹیوب شارٹس ڈاؤنلوڈر',
      tagline: 'یوٹیوب شارٹس ویڈیوز بغیر واٹر مارک کے 1080p فل ایچ ڈی میں فوراً ڈاؤن لوڈ کریں۔',
      buttonText: 'شارٹ ڈاؤن لوڈ کریں',
      inputPlaceholder: 'یوٹیوب شارٹس کا لنک یہاں پیسٹ کریں...',
      steps: [
        { title: 'شارٹس کا لنک کاپی کریں', desc: 'یوٹیوب ایپ پر شیئر کے بٹن پر کلک کریں اور شارٹ کا لنک کاپی کریں۔' },
        { title: 'لنک یہاں پیسٹ کریں', desc: 'اوپر دیے گئے باکس میں لنک پیسٹ کریں اور شارٹ ڈاؤن لوڈ پر کلک کریں۔' },
        { title: 'MP4 فائل محفوظ کریں', desc: 'بغیر واٹر مارک کے 9:16 عمودی ویڈیو سیدھی اپنی گیلری میں محفوظ کریں۔' },
      ],
      features: [
        { title: 'بغیر واٹر مارک کے MP4', desc: 'ویڈیو پر کوئی اضافی لوگو یا واٹر مارک نہیں لگایا جاتا۔' },
        { title: 'عمودی 9:16 فل ایچ ڈی', desc: 'موبائل اور سوشل میڈیا کے لیے اصل کوالٹی برقرار رہتی ہے۔' },
        { title: 'ایک کلک میں ڈاؤن لوڈ', desc: 'بغیر کسی انتظار کے فوری ڈاؤن لوڈ لنک دستیاب ہوتا ہے۔' },
        { title: 'موبائل گیلری میں محفوظ', desc: 'اینڈرائیڈ اور آئی فون کی تصاویر میں براہ راست محفوظ کریں۔' },
        { title: 'اصل آڈیو کے ساتھ', desc: 'ٹرینڈنگ ساؤنڈ ٹریکس اور صاف آواز مکمل طور پر محفوظ ہوتی ہے۔' },
        { title: 'لامحدود استعمال', desc: 'روزانہ جتنے چاہیں شارٹس بغیر فیس کے ڈاؤن لوڈ کریں۔' },
      ],
      audience: [
        { label: 'ٹک ٹاک اور ریلز کری ایٹرز', desc: 'یوٹیوب شارٹس کو انسٹاگرام اور ٹک ٹاک پر دوبارہ پوسٹ کریں۔' },
        { label: 'سوشل میڈیا مینیجرز', desc: 'وائرل ٹرینڈز اور مواد کو کلائنٹس کے لیے جمع کریں۔' },
        { label: 'عام صارفین', desc: 'کھانا پکانے، ورزش اور مضحکہ خیز ویڈیوز کو آف لائن محفوظ کریں۔' },
        { label: 'تحقیق کار', desc: 'مخالف چینلز کے وائرل ہکس کا مطالعہ کریں۔' },
      ],
      useCases: [
        { title: 'کراس پلیٹ فارم ری پرپزنگ', desc: 'شارٹس کو ٹک ٹاک اور ریلز پر اپلوڈ کرنے کے لیے صاف کاپی حاصل کریں۔' },
        { title: 'آف لائن کلپس', desc: 'بغیر انٹرنیٹ کے دیکھنے کے لیے پسندیدہ ریلز محفوظ کریں۔' },
        { title: 'وائرل ہک کا تجزیہ', desc: 'دیکھیں کہ پہلے 3 سیکنڈ میں وائرل ویڈیوز کیسے صارفین کو روکتی ہیں۔' },
        { title: 'ذاتی مجموعہ', desc: 'معلوماتی اور تفریحی شارٹس کا اپنا مجموعہ بنائیں۔' },
      ],
      formats: [
        { label: '1080x1920 عمودی ایچ ڈی', desc: 'موبائل اسکرین کے لیے بہترین کوالٹی۔' },
        { label: '720x1280 ایچ ڈی', desc: 'تیز رفتار اور کم سائز کی ویڈیو۔' },
        { label: 'صاف MP4 فارمیٹ', desc: 'ہر ایڈیٹنگ ایپ کے ساتھ مکمل طور پر مطابقت رکھتا ہے۔' },
        { label: 'سٹریو AAC ساؤنڈ', desc: 'اصل ٹرینڈنگ میوزک اور ڈائیلاگ۔' },
      ],
      faqs: [
        { q: 'کیا ڈاؤن لوڈ کیے گئے شارٹ پر واٹر مارک ہوتا ہے؟', a: 'نہیں! تمام ویڈیوز 100% بغیر کسی واٹر مارک کے ڈاؤن لوڈ ہوتی ہیں۔' },
        { q: 'کیا میں آئی فون پر شارٹس ڈاؤن لوڈ کر سکتا ہوں؟', a: 'جی ہاں، سفاری براؤزر میں لنک پیسٹ کریں اور فائل سیدھی محفوظ کریں۔' },
        { q: 'کیا اس کی کوئی فیس ہے؟', a: 'بالکل نہیں، یہ ٹول سب کے لیے مکمل مفت ہے۔' },
      ],
      seoHeadline: 'بغیر واٹر مارک کے یوٹیوب شارٹس ڈاؤنلوڈر 1080p',
      seoBody: 'YT1s یوٹیوب شارٹس ڈاؤنلوڈر آپ کو وائرل شارٹس بغیر کسی واٹر مارک کے 1080p کوالٹی میں ڈاؤن لوڈ کرنے کا تیز ترین طریقہ پیش کرتا ہے۔'
    },

    'youtube-to-mp3': {
      name: 'یوٹیوب ٹو MP3 کنورٹر',
      tagline: 'کسی بھی یوٹیوب ویڈیو سے 320kbps اور 128kbps ہائی کوالٹی MP3 آڈیو حاصل کریں۔ تیز، صاف اور مفت۔',
      buttonText: 'MP3 حاصل کریں',
      inputPlaceholder: 'یوٹیوب ویڈیو کا لنک یہاں پیسٹ کریں...',
      steps: [
        { title: 'ویڈیو کا لنک پیسٹ کریں', desc: 'جس ویڈیو کی آڈیو چاہیے اس کا لنک کاپی کر کے یہاں پیسٹ کریں۔' },
        { title: 'آڈیو کوالٹی منتخب کریں', desc: '320kbps یا 128kbps MP3 فارمیٹ کا انتخاب کریں۔' },
        { title: 'MP3 ڈاؤن لوڈ کریں', desc: 'فوری طور پر گانا، پوڈکاسٹ یا تقریر اپنے میوزک پلیئر میں ڈاؤن لوڈ کریں۔' },
      ],
      features: [
        { title: '320kbps ہائی فیڈیلیٹی ساؤنڈ', desc: 'کرسٹل کلیئر اسٹوڈیو آڈیو کوالٹی۔' },
        { title: 'مکمل میٹا ڈیٹا ٹیگز', desc: 'آڈیو فائل میں عنوان اور کور تصویر خودکار شامل ہوتی ہے۔' },
        { title: 'فوری کنورژن', desc: 'بغیر طویل انتظار کے چند سیکنڈ میں آڈیو تیار۔' },
        { title: 'پوڈکاسٹ اور لیکچرز کے لیے بہترین', desc: 'لمبی ویڈیوز سے بغیر اضافی ڈیٹا خرچ کیے آواز نکالیں۔' },
      ],
      audience: [
        { label: 'میوزک لورز', desc: 'اپنے پسندیدہ گانے اور ساؤنڈ ٹریکس آف لائن سنیں۔' },
        { label: 'پوڈکاسٹ سننے والے', desc: 'انٹرویوز اور مباحثے بغیر اسکرین آن کیے سنیں۔' },
        { label: 'طلباء', desc: 'لیکچرز اور تلاوت کو یاد کرنے کے لیے آڈیو فائل محفوظ کریں۔' },
      ],
      useCases: [
        { title: 'گاڑی میں آف لائن میوزک', desc: 'بغیر انٹرنیٹ کے سفر کے دوران آڈیو سنیں۔' },
        { title: 'ورزش کے دوران سننا', desc: 'جم میں بیٹری بچانے کے لیے صرف آڈیو چلائیں۔' },
      ],
      formats: [
        { label: 'MP3 320 kbps', desc: 'اعلی ترین کوالٹی کی آڈیو۔' },
        { label: 'MP3 128 kbps', desc: 'معیاری اور کم سائز کی آڈیو فائل۔' },
        { label: 'M4A اورینجیل', desc: 'اصل یوٹیوب آڈیو کوڈیک۔' },
      ],
      faqs: [
        { q: 'کیا 320kbps اصلی کوالٹی ہے؟', a: 'جی ہاں، ہمارا سسٹم یوٹیوب کے اعلی ترین آڈیو بٹ ریٹ سے براہ راست فائل بناتا ہے۔' },
        { q: 'کیا لمبی ویڈیوز (جیسے 2 گھنٹے کا پوڈکاسٹ) سپورٹ ہیں؟', a: 'جی ہاں، لمبی ویڈیوز سے بھی آڈیو بغیر کسی مسئلے کے نکالی جا سکتی ہے۔' },
      ],
      seoHeadline: 'آن لائن یوٹیوب ٹو MP3 کنورٹر - ہائی کوالٹی آڈیو ڈاؤن لوڈ',
      seoBody: 'یوٹیوب ویڈیوز سے شفاف اور بہترین ساؤنڈ نکالنے کے لیے YT1s یوٹیوب ٹو MP3 کنورٹر کا استعمال کریں۔'
    },

    'youtube-thumbnail-downloader': {
      name: 'یوٹیوب تھمب نیل ڈاؤنلوڈر',
      tagline: 'یوٹیوب ویڈیو تھمب نیل فل ایچ ڈی 1080p، MaxRes 1280x720 اور 4K میں ایک کلک سے ڈاؤن لوڈ کریں۔',
      buttonText: 'تھمب نیل حاصل کریں',
      inputPlaceholder: 'یوٹیوب لنک پیسٹ کریں تاکہ تھمب نیل حاصل ہو...',
      steps: [
        { title: 'ویڈیو لنک پیسٹ کریں', desc: 'کسی بھی یوٹیوب ویڈیو کا لنک کاپی کر کے سرچ باکس میں ڈالیں۔' },
        { title: 'ریزولوشنز دیکھیں', desc: 'MaxRes 1280x720، ایچ ڈی اور تمام دستیاب سائز خود بخود ظاہر ہوں گے۔' },
        { title: 'تصویر محفوظ کریں', desc: 'اپنی پسندیدہ ریزولوشن کے نیچے ڈاؤن لوڈ پر کلک کریں اور JPG محفوظ کریں۔' },
      ],
      features: [
        { title: '1080p MaxRes کوالٹی', desc: 'یوٹیوبر کی اپلوڈ کردہ اصل اور مکمل ریزولوشن والی تصویر۔' },
        { title: 'فوری پیش نظارہ', desc: 'ڈاؤن لوڈ کرنے سے پہلے تمام سائزز کو ایک ساتھ دیکھیں۔' },
        { title: 'بغیر کسی واٹر مارک کے', desc: 'اصل گوگل سرور سے بغیر کسی لوگو کے صاف تصویر۔' },
        { title: 'شارٹس تھمب نیل سپورٹ', desc: 'عام ویڈیوز کے ساتھ ساتھ یوٹیوب شارٹس کے کورز بھی حاصل کریں۔' },
      ],
      audience: [
        { label: 'گرافک ڈیزائنرز', desc: 'کامیاب اور زیادہ کلک والے تھمب نیلز کا تجزیہ کریں۔' },
        { label: 'یوٹیوب کری ایٹرز', desc: 'اپنی پرانی ویڈیوز کے گم شدہ تھمب نیلز دوبارہ حاصل کریں۔' },
        { label: 'بلاگرز اور صحافی', desc: 'اپنے مضامین میں ہائی ریزولوشن تصاویر شامل کریں۔' },
      ],
      useCases: [
        { title: 'ڈیزائن سے تحریک لینا', desc: 'وائرل ویڈیوز کے رنگ، فونٹس اور اسٹائل کو دیکھ کر نیا تھمب نیل ڈیزائن کریں۔' },
        { title: 'گم شدہ فائلیں واپس لانا', desc: 'اگر پروجیکٹ فائل ڈیلیٹ ہو گئی ہو تو فوری طور پر اصل کور ڈاؤن لوڈ کریں۔' },
      ],
      formats: [
        { label: 'MaxRes Default (1280 × 720)', desc: 'اعلیٰ ترین فل ایچ ڈی تھمب نیل۔' },
        { label: 'Standard (640 × 480)', desc: 'معیاری 4:3 تصویر۔' },
        { label: 'High Quality (480 × 360)', desc: 'ویب سائٹ کے لیے موزوں درمیانی سائز۔' },
      ],
      faqs: [
        { q: 'کیا یوٹیوب تھمب نیل 4K میں دستیاب ہوتا ہے؟', a: 'یوٹیوب خود تھمب نیل کو زیادہ سے زیادہ 1280x720 (MaxResDefault) تک محدود رکھتا ہے۔ ہمارا ٹول یہ بہترین ممکنہ کوالٹی نکالتا ہے۔' },
        { q: 'موبائل پر تصویر کیسے محفوظ کریں؟', a: 'ڈاؤن لوڈ کے بٹن پر ٹیپ کریں یا تصویر پر انگلی دبا کر رکھیں اور Save Image پر کلک کریں۔' },
      ],
      seoHeadline: 'یوٹیوب تھمب نیل ڈاؤنلوڈر - اصل فل ایچ ڈی ریزولوشن میں محفوظ کریں',
      seoBody: 'یوٹیوب تھمب نیل کسی بھی ویڈیو کے کلک تھرو ریٹ (CTR) کا سب سے اہم عنصر ہے۔ YT1s کے ذریعے آپ کسی بھی ویڈیو کا اصل اور شفاف کور چند سیکنڈ میں محفوظ کر سکتے ہیں۔'
    },

    'youtube-shorts-thumbnail-downloader': {
      name: 'یوٹیوب شارٹس تھمب نیل ڈاؤنلوڈر',
      tagline: 'یوٹیوب شارٹس کے کور تھمب نیلز اصل ہائی ریزولوشن کوالٹی میں بغیر واٹر مارک ڈاؤن لوڈ کریں۔',
      buttonText: 'شارٹس تھمب نیل حاصل کریں',
      inputPlaceholder: 'یوٹیوب شارٹس کا لنک پیسٹ کریں...',
      steps: [
        { title: 'شارٹس کا لنک کاپی کریں', desc: 'یوٹیوب شارٹ کھولیں، شیئر پر کلک کریں اور لنک کاپی کریں۔' },
        { title: 'یہاں پیسٹ کریں', desc: 'لنک کو اوپر والے خانے میں پیسٹ کریں اور بٹن دبائیں۔' },
        { title: 'کور محفوظ کریں', desc: 'MaxRes یا ایچ ڈی سائز منتخب کر کے تصویر ڈاؤن لوڈ کریں۔' },
      ],
      features: [
        { title: 'فل ایچ ڈی شارٹس کورز', desc: 'یوٹیوب کی تیار کردہ اعلی ترین ریزولوشن والی تصویر نکالتا ہے۔' },
        { title: 'بغیر کسی واٹر مارک یا پلے بٹن کے', desc: 'مکمل صاف کور تصویر۔' },
        { title: 'موبائل میں ایک کلک پر سیو', desc: 'آئی فون یا اینڈرائیڈ کی گیلری میں فوری محفوظ کریں۔' },
      ],
      audience: [
        { label: 'شارٹ فارم کری ایٹرز', desc: 'دیکھیں کہ وائرل کری ایٹرز کون سے ہک فریم استعمال کرتے ہیں۔' },
        { label: 'سوشل میڈیا ایجنسیاں', desc: 'مخالفین کے ویژول اسٹائل کا مطالعہ کریں۔' },
      ],
      useCases: [
        { title: 'وائرل ہک فریم کا مطالعہ', desc: 'پہلے فریم اور فونٹس کی جانچ کریں۔' },
        { title: 'سوشل میڈیا پوسٹس', desc: 'ہائی ریزولوشن کور کو دیگر نیٹ ورکس پر استعمال کریں۔' },
      ],
      formats: [
        { label: 'MaxRes ریزولوشن (1280 × 720)', desc: 'بہترین کوالٹی۔' },
        { label: 'صاف JPEG فارمیٹ', desc: 'بغیر کسی کوالٹی نقصان کے محفوظ۔' },
      ],
      faqs: [
        { q: 'کیا شارٹس کے کسٹم تھمب نیلز ڈاؤن لوڈ ہو سکتے ہیں؟', a: 'جی ہاں، جو کور اپلوڈ کے دوران منتخب کیا گیا ہو وہ ڈاؤن لوڈ ہو جاتا ہے۔' },
      ],
      seoHeadline: 'مفت یوٹیوب شارٹس تھمب نیل ڈاؤنلوڈر فل ایچ ڈی',
      seoBody: 'یوٹیوب شارٹس کے کور اور اوپننگ فریم کو اصل کوالٹی میں ڈاؤن لوڈ کرنے کا تیز ترین ذریعہ۔'
    },

    'how-to-download-youtube-thumbnails': {
      name: 'یوٹیوب تھمب نیل ڈاؤن لوڈ کرنے کا طریقہ (مکمل گائیڈ اور ٹول)',
      tagline: 'پی سی، میک، آئی فون اور اینڈرائیڈ پر 1080p MaxRes میں تھمب نیل ڈاؤن لوڈ کرنے کا مکمل طریقہ۔',
      buttonText: 'تھمب نیل حاصل کریں',
      inputPlaceholder: 'یوٹیوب ویڈیو کا لنک یہاں درج کریں...',
      steps: [
        { title: 'مرحلہ 1: ویڈیو کا لنک کاپی کریں', desc: 'یوٹیوب پر جائیں اور جس ویڈیو کا تھمب نیل چاہیے اس کا لنک کاپی کریں۔' },
        { title: 'مرحلہ 2: YT1s میں پیسٹ کریں', desc: 'اوپر دیے گئے سرچ باکس میں لنک پیسٹ کریں اور بٹن دبائیں۔' },
        { title: 'مرحلہ 3: تصویر محفوظ کریں', desc: 'MaxRes کوالٹی کے نیچے ڈاؤن لوڈ پر کلک کریں اور تصویر محفوظ کریں۔' },
      ],
      features: [
        { title: 'آسان اور مرحلہ وار گائیڈ', desc: 'موبائل اور کمپیوٹر دونوں کے لیے مکمل رہنمائی۔' },
        { title: 'سافٹ ویئر انسٹال کرنے کی ضرورت نہیں', desc: 'براہ راست براؤزر سے کام کرتا ہے۔' },
        { title: '100% مفت اور محفوظ', desc: 'کوئی سائن اپ یا فیس نہیں۔' },
      ],
      audience: [
        { label: 'نئے یوٹیوبرز', desc: 'سیکھیں کہ یوٹیوب تھمب نیلز کیسے اسٹور کرتا ہے اور انہیں کیسے حاصل کیا جاتا ہے۔' },
        { label: 'ڈیزائن کے طلباء', desc: 'کامیاب ویڈیوز کے ڈیزائن عناصر کا مطالعہ کریں۔' },
      ],
      useCases: [
        { title: 'گم شدہ ڈیزائن ریکور کرنا', desc: 'اگر فوٹوشاپ فائل ضائع ہو جائے تو آن لائن کور واپس حاصل کریں۔' },
      ],
      formats: [
        { label: 'MaxResDefault (1280 × 720)', desc: 'سب سے اعلیٰ معیار۔' },
        { label: 'Standard (640 × 480)', desc: 'معیاری سائز۔' },
      ],
      faqs: [
        { q: 'یوٹیوب تھمب نیل کی سب سے بڑی کوالٹی کیا ہے؟', a: 'یوٹیوب پر سب سے بڑی کوالٹی 1280x720 pixels (MaxRes) ہوتی ہے۔' },
        { q: 'کیا یہ قانونی ہے؟', a: 'جی ہاں، ذاتی مطالعے، تعلیمی مقاصد اور تحقیق کے لیے تھمب نیل ڈاؤن لوڈ کرنا جائز ہے۔' },
      ],
      seoHeadline: '2026 میں یوٹیوب تھمب نیل ڈاؤن لوڈ کرنے کی مکمل گائیڈ',
      seoBody: 'اس گائیڈ کے ذریعے آپ جان سکتے ہیں کہ کسی بھی یوٹیوب ویڈیو کا ایچ ڈی تھمب نیل بغیر کسی ایکسٹینشن کے کیسے ڈاؤن لوڈ کیا جائے۔'
    },
  },

  es: {
    'youtube-video-downloader': {
      name: 'Descargador de Videos de YouTube',
      tagline: 'Descarga cualquier video de YouTube en 4K, 1080p Full HD o SD. Rápido, gratis y sin necesidad de instalar software.',
      buttonText: 'Descargar Ahora',
      inputPlaceholder: 'Pega una URL o ID de video de YouTube...',
      steps: [
        { title: 'Pega la URL', desc: 'Copia el enlace del video de YouTube y pégalo en el campo superior.' },
        { title: 'Elige la Resolución', desc: 'Haz clic en Descargar Ahora para ver todas las calidades disponibles.' },
        { title: 'Guarda en tu Dispositivo', desc: 'Elige 4K, 1080p o MP4 y descárgalo directamente a tu galería.' },
      ],
      features: [
        { title: 'Resolución Real 4K y 1080p', desc: 'Máxima fidelidad visual con audio sincronizado de alta fidelidad.' },
        { title: 'Sin Almacenamiento en Servidor', desc: 'Transmisión directa a tu navegador; cero archivos guardados en disco.' },
        { title: 'Sin Marcas de Agua', desc: 'Videos MP4 limpios sin logotipos ni marcas de terceros.' },
        { title: 'Velocidad Ultrarrápida', desc: 'Conexión directa a los servidores de alta velocidad de YouTube.' },
      ],
      seoHeadline: 'Descargador de Videos de YouTube en 4K y 1080p Gratis Online',
      seoBody: 'YT1s te permite descargar cualquier video de YouTube en 4K, 1080p y 720p sin complicaciones y sin publicidad intrusiva.'
    },
    'youtube-shorts-downloader': {
      name: 'Descargador de YouTube Shorts',
      tagline: 'Descarga videos verticales de YouTube Shorts en 1080p Full HD sin marcas de agua.',
      buttonText: 'Descargar Short',
      inputPlaceholder: 'Pega el enlace de YouTube Shorts...',
      seoHeadline: 'Descargar YouTube Shorts sin Marca de Agua en 1080p',
      seoBody: 'Guarda tus Shorts favoritos en formato vertical 9:16 de alta resolución directamente en tu móvil o PC.'
    },
    'youtube-thumbnail-downloader': {
      name: 'Descargador de Miniaturas de YouTube',
      tagline: 'Descarga miniaturas de YouTube en 1080p MaxRes, 4K y calidades estándar en un clic.',
      buttonText: 'Obtener Miniaturas',
      inputPlaceholder: 'Pega la URL para obtener miniaturas en alta resolución...',
      seoHeadline: 'Descargar Miniaturas de YouTube en Máxima Resolución 1080p HD',
      seoBody: 'Accede a las miniaturas originales subidas por los creadores en calidad 1280x720 MaxRes para análisis o inspiración.'
    }
  },

  hi: {
    'youtube-video-downloader': {
      name: 'यूट्यूब वीडियो डाउनलोडर',
      tagline: 'कोई भी यूट्यूब वीडियो 4K, 1080p फुल एचडी या एसडी में डाउनलोड करें। तेज़, मुफ़्त और बिना किसी सॉफ़्टवेयर के।',
      buttonText: 'अभी डाउनलोड करें',
      inputPlaceholder: 'यूट्यूब वीडियो का लिंक यहां पेस्ट करें...',
      steps: [
        { title: 'लिंक पेस्ट करें', desc: 'यूट्यूब वीडियो का लिंक कॉपी करके ऊपर दिए गए सर्च बॉक्स में पेस्ट करें।' },
        { title: 'गुणवत्ता चुनें', desc: 'डाउनलोड पर क्लिक करें और सभी उपलब्ध रिज़ॉल्यूशन देखें।' },
        { title: 'डिवाइस में सेव करें', desc: '4K, 1080p या MP4 चुनें और तुरंत डाउनलोड करें।' },
      ],
      features: [
        { title: 'असली 4K और 1080p गुणवत्ता', desc: 'स्पष्ट साउंड और शानदार पिक्चर क्वालिटी के साथ डाउनलोड करें।' },
        { title: 'सर्वर पर कोई स्टोरेज नहीं', desc: 'क्लाउड स्ट्रीमिंग द्वारा सीधे आपके डिवाइस में डाउनलोड।' },
        { title: 'कोई वॉटरमार्क नहीं', desc: 'बिल्कुल साफ़ MP4 वीडियो बिना किसी वॉटरमार्क के।' },
      ],
      seoHeadline: 'ऑनलाइन यूट्यूब वीडियो डाउनलोडर - 4K और 1080p में मुफ़्त डाउनलोड करें',
      seoBody: 'YT1s यूट्यूब वीडियो डाउनलोडर की मदद से आप किसी भी वीडियो को उच्चतम गुणवत्ता में मुफ़्त में डाउनलोड कर सकते हैं।'
    },
    'youtube-thumbnail-downloader': {
      name: 'यूट्यूब थंबनेल डाउनलोडर',
      tagline: 'यूट्यूब वीडियो का थंबनेल 1080p फुल एचडी और MaxRes में एक क्लिक में डाउनलोड करें।',
      buttonText: 'थंबनेल पाएं',
      inputPlaceholder: 'यूट्यूब लिंक पेस्ट करें...',
      seoHeadline: 'यूट्यूब थंबनेल डाउनलोडर - फुल एचडी 1080p में सेव करें',
      seoBody: 'किसी भी यूट्यूब वीडियो का मूल और स्पष्ट थंबनेल आसानी से अपने फ़ोन या कंप्यूटर पर डाउनलोड करें।'
    }
  },

  ar: {
    'youtube-video-downloader': {
      name: 'برنامج تحميل فيديوهات يوتيوب',
      tagline: 'حمّل أي فيديو من يوتيوب بدقة 4K و 1080p Full HD مجاناً وبسرعة فائقة وبدون برامج.',
      buttonText: 'تحميل الآن',
      inputPlaceholder: 'الصق رابط فيديو يوتيوب هنا...',
      steps: [
        { title: 'الصق الرابط', desc: 'انسخ رابط فيديو يوتيوب من المتصفح أو التطبيق والتقه في المربع أعلاه.' },
        { title: 'اختر الجودة', desc: 'انقر على تحميل الآن لعرض جميع الصيغ والجودات المتاحة.' },
        { title: 'احفظ في جهازك', desc: 'اختر 4K أو 1080p أو MP4 وحمّله مباشرة إلى جهازك.' },
      ],
      features: [
        { title: 'دقة 4K و 1080p أصلية', desc: 'جودة فيديو وصوت نقي وعالي الدقة بدون ضغط.' },
        { title: 'بدون تخزين على السيرفر', desc: 'بث مباشر وسحابي إلى جهازك بدون حفظ أي ملفات.' },
        { title: 'بدون علامة مائية', desc: 'فيديوهات MP4 نظيفة بدون أي شعارات إضافية.' },
      ],
      seoHeadline: 'تحميل فيديوهات يوتيوب بجودة 4K و 1080p مجاناً عبر الإنترنت',
      seoBody: 'يتيح لك YT1s تنزيل فيديوهات يوتيوب بأعلى جودة ممكنة 4K و 1080p و 720p بنقرة واحدة وبدون إعلانات مزعجة.'
    },
    'youtube-thumbnail-downloader': {
      name: 'تحميل صورة غلاف يوتيوب (Thumbnail)',
      tagline: 'حمّل صور مصغرة لفيديوهات يوتيوب بدقة 1080p MaxRes و 4K بضغطة زر واحدة.',
      buttonText: 'جلب الصور المصغرة',
      inputPlaceholder: 'الصق رابط يوتيوب لجلب الصور المصغرة...',
      seoHeadline: 'تحميل الصور المصغرة ليوتيوب بدقة Full HD',
      seoBody: 'احصل على الغلاف الأصلي لأي فيديو على يوتيوب بدقة 1280x720 MaxRes بدون أي علامة مائية.'
    }
  },

  fr: {
    'youtube-video-downloader': {
      name: 'Téléchargeur de Vidéos YouTube',
      tagline: 'Téléchargez n\'importe quelle vidéo YouTube en 4K, 1080p Full HD ou SD. Rapide, gratuit et sans logiciel.',
      buttonText: 'Télécharger',
      inputPlaceholder: 'Collez l\'URL de la vidéo YouTube ici...',
      seoHeadline: 'Téléchargeur de Vidéos YouTube en 4K et 1080p Gratuit',
      seoBody: 'YT1s vous permet de télécharger des vidéos YouTube en haute résolution sans publicité et sans compte.'
    }
  },

  de: {
    'youtube-video-downloader': {
      name: 'YouTube Video Downloader',
      tagline: 'Laden Sie jedes YouTube-Video in 4K, 1080p Full HD oder SD herunter. Schnell, kostenlos und ohne Software.',
      buttonText: 'Jetzt Herunterladen',
      inputPlaceholder: 'YouTube-URL hier einfügen...',
      seoHeadline: 'Kostenloser YouTube Video Downloader in 4K und 1080p',
      seoBody: 'Laden Sie YouTube-Videos in bester Auflösung direkt und ohne Anmeldung auf Ihr Gerät herunter.'
    }
  },

  pt: {
    'youtube-video-downloader': {
      name: 'Baixador de Vídeos do YouTube',
      tagline: 'Baixe qualquer vídeo do YouTube em 4K, 1080p Full HD ou SD. Rápido, gratuito e sem instalação de software.',
      buttonText: 'Baixar Agora',
      inputPlaceholder: 'Cole a URL do vídeo do YouTube aqui...',
      seoHeadline: 'Baixar Vídeos do YouTube em 4K e 1080p Grátis Online',
      seoBody: 'O YT1s permite que você baixe vídeos do YouTube com máxima qualidade e sem marcas d\'água.'
    }
  },

  zh: {
    'youtube-video-downloader': {
      name: 'YouTube 视频下载器',
      tagline: '秒速下载 4K、1080p 全高清及标准画质 YouTube 视频。无需安装任何软件，完全免费。',
      buttonText: '立即下载',
      inputPlaceholder: '在此粘贴 YouTube 视频链接...',
      seoHeadline: '免费在线下载 4K 与 1080p 高清 YouTube 视频',
      seoBody: 'YT1s 提供高速无水印的 YouTube 视频下载服务，支持 4K、1080p MP4 及 WebM 格式。'
    },
    'youtube-thumbnail-downloader': {
      name: 'YouTube 缩略图下载器',
      tagline: '一键下载 1080p MaxRes 及高清 YouTube 视频封面缩略图。',
      buttonText: '获取缩略图',
      inputPlaceholder: '粘贴 YouTube 链接获取高清缩略图...',
      seoHeadline: '下载 1080p 全高清 YouTube 封面缩略图',
      seoBody: '获取创作者上传的原始 1280x720 MaxRes 无损高清缩略图。'
    }
  }
};

/**
 * Returns a localized ToolData object based on the user's selected language.
 * Falls back gracefully to English if a field or language is not explicitly defined.
 */
export function getLocalizedTool(tool: ToolData, lang: Language): ToolData {
  if (lang === 'en') return tool;

  const langOverrides = TOOL_LOCALIZATIONS[lang];
  if (!langOverrides) return tool;

  const toolOverride = langOverrides[tool.slug];
  if (!toolOverride) return tool;

  return {
    ...tool,
    name: toolOverride.name || tool.name,
    tagline: toolOverride.tagline || tool.tagline,
    buttonText: toolOverride.buttonText || tool.buttonText,
    inputPlaceholder: toolOverride.inputPlaceholder || tool.inputPlaceholder,
    steps: toolOverride.steps || tool.steps,
    features: toolOverride.features || tool.features,
    audience: toolOverride.audience || tool.audience,
    useCases: toolOverride.useCases || tool.useCases,
    formats: toolOverride.formats || tool.formats,
    faqs: toolOverride.faqs || tool.faqs,
    seoHeadline: toolOverride.seoHeadline || tool.seoHeadline,
    seoBody: toolOverride.seoBody || tool.seoBody,
  };
}

