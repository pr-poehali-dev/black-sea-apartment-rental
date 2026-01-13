import json
import os
import urllib.request
import urllib.parse
from datetime import datetime

def handler(event: dict, context) -> dict:
    '''API для отправки заявок на бронирование квартиры в Telegram'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }

    if method == 'POST':
        try:
            data = json.loads(event.get('body', '{}'))
            
            name = data.get('name', 'Не указано')
            phone = data.get('phone', 'Не указано')
            check_in = data.get('checkIn', 'Не указано')
            check_out = data.get('checkOut', 'Не указано')
            guests = data.get('guests', 'Не указано')
            total = data.get('total', 'Не указано')
            days = data.get('days', 'Не указано')
            message = data.get('message', '')

            telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN')
            chat_id = os.environ.get('TELEGRAM_CHAT_ID')

            if not telegram_token or not chat_id:
                return {
                    'statusCode': 500,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'success': False,
                        'error': 'Telegram настройки не установлены'
                    }),
                    'isBase64Encoded': False
                }

            text = f"""🏖 Новая заявка на бронирование!

👤 Имя: {name}
📱 Телефон: {phone}

📅 Заезд: {check_in}
📅 Выезд: {check_out}
👥 Гостей: {guests}

🌙 Ночей: {days}
💰 Итого: {total} ₽"""

            if message:
                text += f"\n\n💬 Сообщение:\n{message}"

            text += f"\n\n⏰ Дата заявки: {datetime.now().strftime('%d.%m.%Y %H:%M')}"

            url = f"https://api.telegram.org/bot{telegram_token}/sendMessage"
            payload = {
                'chat_id': chat_id,
                'text': text,
                'parse_mode': 'HTML'
            }

            req = urllib.request.Request(
                url,
                data=json.dumps(payload).encode('utf-8'),
                headers={'Content-Type': 'application/json'}
            )

            with urllib.request.urlopen(req) as response:
                result = json.loads(response.read().decode('utf-8'))

            if result.get('ok'):
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'success': True,
                        'message': 'Заявка успешно отправлена!'
                    }),
                    'isBase64Encoded': False
                }
            else:
                return {
                    'statusCode': 500,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'success': False,
                        'error': 'Ошибка отправки в Telegram'
                    }),
                    'isBase64Encoded': False
                }

        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': False,
                    'error': str(e)
                }),
                'isBase64Encoded': False
            }

    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }
